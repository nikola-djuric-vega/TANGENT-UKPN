import { SlideOutPanelItems } from '_context/slideout-panel-context'
import OptionSelectorControls from '_lib/option-selector-controls'
import { useState, useRef, useEffect } from 'react'
import styles from './OptionSelector.module.scss'
import { useRouter } from 'next/router'

import {
  TransitionFromInactiveType,
  TransitionToTrailType,
  OptionSelectorState,
  SetCurrentStepType,
  OptionHandlerType,
  StoreNextStepType,
} from '_types/local'

export interface OptionSelectorProps {
  rawHTML: string
}

const OptionSelector = ({ rawHTML }: OptionSelectorProps) => {
  const { setSlideOutPanelContent } = SlideOutPanelItems()
  const {
    resetSelectedOptions,
    setParentChoiceActive,
    setTargetSelected,
    setParentChoiceInactive,
    autoProgressHandler,
    clearSelectedState,
    setTabToNextState,
    disableTabbing,
    findParentNode,
    enableTabbing,
    getAllElems,
    stripHash,
    getElem,
    CONSTS,
  } = new OptionSelectorControls()

  const comp = useRef<HTMLDivElement>(null)
  const { push } = useRouter()
  const [optionSelector, setState] = useState<OptionSelectorState>({
    trail: [],
    currentStep: null,
    autoProgress: true,
    nextStep: null,
    helpOpen: null,
    comp: comp.current as HTMLDivElement,
  })

  const setOptionSelector = (newState: any) => {
    setState((prevState) => {
      return {
        ...prevState,
        ...newState,
      }
    })
  }

  useEffect(() => {
    setOptionSelector({
      comp: document.querySelector('.option-selector') as HTMLDivElement,
    })
  }, [])

  useEffect(() => {
    if (optionSelector.comp) {
      initState()
      initAutoProgress()
      initFirst()
    }
  }, [optionSelector.comp])

  useEffect(() => {
    if (optionSelector.comp) {
      clearEventListener()
      initEvents()

      return clearEventListener
    }
  }, [optionSelector])

  const clearEventListener = () => {
    const selectorOptions = Array.from(
      getAllElems(optionSelector.comp, `.${CONSTS.OPTION_SELECTOR_OPTION}`)
    )

    selectorOptions.map((opt) =>
      opt.removeEventListener('click', onClickOptionHandler)
    )

    const selectorNextButtons = Array.from(
      getAllElems(optionSelector.comp, `.${CONSTS.OPTION_SELECTOR_NEXTBUTTON}`)
    )

    selectorNextButtons.map((opt) =>
      opt.removeEventListener('click', onClickNextHandler)
    )

    const selectorBackButtons = Array.from(
      getAllElems(optionSelector.comp, `.${CONSTS.OPTION_SELECTOR_BACKBUTTON}`)
    )
    selectorBackButtons.map((opt) =>
      opt.removeEventListener('click', onBackClickHandler)
    )

    const helpContentButtons = Array.from(
      getAllElems(optionSelector.comp, `.${CONSTS.OPTION_SELECTOR_HELPBUTTON}`)
    )
    helpContentButtons.map((opt) =>
      opt.removeEventListener('click', handleHelpButton)
    )
  }

  const initEvents = () => {
    const selectorOptions = Array.from(
      getAllElems(optionSelector.comp, `.${CONSTS.OPTION_SELECTOR_OPTION}`)
    )
    selectorOptions.map((opt) =>
      opt.addEventListener('click', onClickOptionHandler)
    )

    const selectorNextButtons = Array.from(
      getAllElems(optionSelector.comp, `.${CONSTS.OPTION_SELECTOR_NEXTBUTTON}`)
    )
    selectorNextButtons.map((opt) =>
      opt.addEventListener('click', onClickNextHandler)
    )

    const selectorBackButtons = Array.from(
      getAllElems(optionSelector.comp, `.${CONSTS.OPTION_SELECTOR_BACKBUTTON}`)
    )
    selectorBackButtons.map((opt) =>
      opt.addEventListener('click', onBackClickHandler)
    )

    const helpContentButtons = Array.from(
      getAllElems(optionSelector.comp, `.${CONSTS.OPTION_SELECTOR_HELPBUTTON}`)
    )
    helpContentButtons.map((opt) =>
      opt.addEventListener('click', handleHelpButton)
    )
  }

  const initState = () => {
    const { OPTION_SELECTOR_IS_ACTIVE, OPTION_SELECTOR_PANEL } = CONSTS
    const activeClass = `.${OPTION_SELECTOR_IS_ACTIVE}`
    const activeEl = getElem(optionSelector.comp, activeClass)
    const panels = Array.from(
      getAllElems(optionSelector.comp, OPTION_SELECTOR_PANEL)
    )
    panels.map((pnl) => {
      pnl.setAttribute('aria-hidden', 'true')
    })
    setCurrentStep(activeEl ? activeEl.id : null)
  }

  const initAutoProgress = () => {
    optionSelector.comp.classList.add(CONSTS.OPTION_SELECTOR_AUTOPROGRESS)
  }

  const initFirst = () => {
    const activeClass = `.${CONSTS.OPTION_SELECTOR_IS_ACTIVE}`
    const startClass = `.${CONSTS.OPTION_SELECTOR_IS_START}`
    const attrCategory = `${CONSTS.OPTION_SELECTOR_DATA_CATEGORY}`
    const routeName = optionSelector.comp.getAttribute(
      'data-option-selector-route'
    )
    const activeEl = getElem(optionSelector.comp, activeClass)
    const isStartSelector = `${startClass}[${attrCategory}='${routeName}']`
    let firstPanel

    if (!activeEl && routeName && routeName.length) {
      firstPanel = getElem(optionSelector.comp, isStartSelector)
    } else {
      firstPanel = getElem(
        optionSelector.comp as HTMLDivElement,
        `.${CONSTS.OPTION_SELECTOR_PANEL}`
      )
    }

    if (firstPanel) {
      firstPanel.classList.add(CONSTS.OPTION_SELECTOR_IS_ACTIVE)
      enableTabbing(firstPanel)
      setTabToNextState(firstPanel)
    }

    setCurrentStep(firstPanel ? firstPanel.id : null)

    optionSelector.comp.classList.add(CONSTS.OPTION_SELECTOR_INIT)
  }

  const onClickOptionHandler: OptionHandlerType = (e) => {
    e.preventDefault()

    const target = e.target as HTMLDivElement
    const isSelected = target.classList.contains(
      CONSTS.OPTION_SELECTOR_IS_SELECTED
    )

    resetSelectedOptions(target)
    setParentChoiceInactive(target)

    if (!isSelected) {
      setTargetSelected(target)
      setParentChoiceActive(target)
      storeNextStep(target)

      if (optionSelector.autoProgress) {
        autoProgressHandler(target)
      }
    }
  }

  const onClickNextHandler: OptionHandlerType = (e) => {
    const target = e.target as HTMLDivElement
    const className = CONSTS.OPTION_SELECTOR_NEXTBUTTON
    const isNext = target.classList.contains(CONSTS.OPTION_SELECTOR_NEXTBUTTON)
    const buttonEl = isNext ? target : findParentNode({ className }, target)
    const buttonNext = buttonEl.getAttribute(CONSTS.OPTION_SELECTOR_DATA_NEXT)
    const buttonUrl = stripHash(
      buttonEl.getAttribute(CONSTS.OPTION_SELECTOR_DATA_LANDING) as string
    )

    const buttonHREF =
      stripHash(buttonEl.getAttribute('data-href') as string) ||
      stripHash(buttonEl.getAttribute('href') as string)

    const { nextStep } = optionSelector

    if (buttonHREF && buttonHREF.length) {
      push(buttonHREF)
    } else {
      e.preventDefault()
      if (buttonUrl && buttonUrl.indexOf('__TODO__') > -1) {
        alert('Landing page url required.') // eslint-disable-line
        return
      }

      if (nextStep && nextStep.indexOf('__TODO__') > -1) {
        alert('Summary / Next Step required.') // eslint-disable-line
        return
      }

      if (nextStep && nextStep.length) {
        transitionToTrail(buttonEl)
        transitionFromInactive()
      } else if (buttonNext && buttonNext.length) {
        setOptionSelector({ nextStep: buttonNext })
        transitionToTrail(buttonEl)
        transitionFromInactive(true)
      }
    }
  }

  const onBackClickHandler: OptionHandlerType = (e) => {
    e.preventDefault()
    const { trail } = optionSelector

    if (trail.length) {
      transitionToInactive()
      transitionFromTrail()
    }
  }

  const transitionToTrail: TransitionToTrailType = (target) => {
    const el = findParentNode(
      { className: CONSTS.OPTION_SELECTOR_PANEL },
      target
    )
    const elClassList = el.classList

    disableTabbing(target)

    addItemToTrail(stripHash(el.id))

    elClassList.remove(CONSTS.OPTION_SELECTOR_IS_ACTIVE)
    elClassList.add(CONSTS.OPTION_SELECTOR_IS_IN_TRAIL)
  }

  const transitionFromTrail = () => {
    const goBackTo = optionSelector.trail.pop()
    const el = getElem(optionSelector.comp, `#${goBackTo}`)
    const elClassList = el.classList
    const activeChoice = el.getAttribute(CONSTS.OPTION_SELECTOR_DATA_CHOICE)

    enableTabbing(el)
    setTabToNextState(el)

    setCurrentStep(goBackTo, activeChoice as string)

    elClassList.add(CONSTS.OPTION_SELECTOR_IS_ACTIVE)
    elClassList.remove(CONSTS.OPTION_SELECTOR_IS_IN_TRAIL)
  }

  const addItemToTrail = (idString = '') => {
    idString &&
      idString.length &&
      setOptionSelector({ trail: [...optionSelector.trail, idString] })
  }

  const transitionFromInactive: TransitionFromInactiveType = (
    inTrail = false
  ) => {
    const { nextStep } = optionSelector

    if (!nextStep) throw new Error('no next step defined')

    const el = getElem(comp?.current as HTMLDivElement, `#${nextStep}`)

    enableTabbing(el)
    setTabToNextState(el)
    setCurrentStep(el.id)
    el.classList.add(CONSTS.OPTION_SELECTOR_IS_ACTIVE)

    if (inTrail) el.classList.remove(CONSTS.OPTION_SELECTOR_IS_IN_TRAIL)
  }

  const transitionToInactive = () => {
    const { currentStep } = optionSelector
    const el = getElem(comp?.current as HTMLDivElement, `#${currentStep}`)

    clearSelectedState(el)
    disableTabbing(el)

    el.classList.remove(CONSTS.OPTION_SELECTOR_IS_ACTIVE)
  }

  const setCurrentStep: SetCurrentStepType = (
    current = '',
    activeChoice = ''
  ) => {
    setOptionSelector({
      currentStep: current && current.length ? current : null,
      nextStep: activeChoice && activeChoice.length ? activeChoice : null,
    })
  }

  const storeNextStep: StoreNextStepType = (target = null) => {
    const attrNext = CONSTS.OPTION_SELECTOR_DATA_NEXT
    const nextId = target
      ? stripHash(target.getAttribute(attrNext) as string)
      : null
    setOptionSelector({ nextStep: nextId })
  }

  const handleHelpButton = (e: Event) => {
    e.preventDefault()
    const target = e.target as HTMLDivElement
    const attributeName = CONSTS.OPTION_SELECTOR_DATA_SLIDEOUT_HELP
    const helpContentID =
      target.getAttribute(attributeName) ||
      findParentNode({ attributeName }, target).getAttribute(attributeName)

    const helpContent = getElem(
      optionSelector.comp,
      `#${helpContentID}`
    ).innerHTML
    setSlideOutPanelContent?.(helpContent)
  }

  return (
    <div
      className={styles.connectionsBox}
      dangerouslySetInnerHTML={{ __html: rawHTML }}
      ref={comp}
    />
  )
}

export default OptionSelector
