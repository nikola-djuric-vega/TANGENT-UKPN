import {
  SetParentChoiceInactiveType,
  SetParentChoiceActiveType,
  ResetSelectedOptionsType,
  AutoProgressHandlerType,
  ClearSelectedStateType,
  SetTargetSelectedType,
  SetTabToNextStateType,
  FindParentNode,
  HanldeTabbing,
  GetAllElems,
  GetElem,
  StripHash,
  FireEvent,
} from '_types/local/option-selector'

export default class OptionSelectorControls {
  public CONSTS = {
    OPTION_SELECTOR_OPTION_HELP_ANIM_DURARION: 500,
    /**
     * Data Attributes
     */
    OPTION_SELECTOR_DATA_CHOICE: 'data-option-selector-active-choice',
    OPTION_SELECTOR_DATA_NEXT: 'data-option-selector-next',
    OPTION_SELECTOR_DATA_LANDING: 'data-option-selector-landing-url',
    OPTION_SELECTOR_DATA_CATEGORY: 'data-option-selector-category',
    OPTION_SELECTOR_DATA_SLIDEOUT_HELP: 'data-slideout-panel-content',

    /**
     * Events
     */
    OPTION_SELECTOR_EVENT_TOGGLE_HELP: 'slideout-toggle',
    CLICK_EVENT: 'click',

    /**
     * Classes
     */
    OPTION_SELECTOR_PREFIX: 'option-selector',
    OPTION_SELECTOR_PANEL: 'option-selector__panel',
    OPTION_SELECTOR_OPTION: 'option-selector__option',
    OPTION_SELECTOR_NEXTBUTTON: 'option-selector__next-button',
    OPTION_SELECTOR_BACKBUTTON: 'option-selector__back-button',
    OPTION_SELECTOR_HELPBUTTON: 'option-selector__help-button',

    OPTION_SELECTOR_INIT: 'option-selector--initialized',
    OPTION_SELECTOR_AUTOPROGRESS: 'option-selector--auto-progress',
    OPTION_SELECTOR_IS_START: 'option-selector__panel--start',
    OPTION_SELECTOR_IS_ERRORED: 'option-selector__panel--errored',
    OPTION_SELECTOR_IS_SELECTED: 'option-selector__option--selected',
    OPTION_SELECTOR_IS_CHOICE_MADE: 'option-selector__panel--choice-made',
    OPTION_SELECTOR_NO_CHOICE_REQUIRED:
      'option-selector__panel--no-choice-required',
    OPTION_SELECTOR_IS_ACTIVE: 'option-selector__panel--active',
    OPTION_SELECTOR_IS_HELP_ACTIVE: 'option-selector__panel--help-active',
    OPTION_SELECTOR_IS_IN_TRAIL: 'option-selector__panel--in-trail',
    OPTION_SELECTOR_IS_UNDERLAY_ACTIVE:
      'option-selector__panel--underlay-active',
  }

  // UTILS
  public getElem: GetElem = (container, selector) => {
    return container.querySelector(selector) as HTMLDivElement
  }

  public getAllElems: GetAllElems = (container, selector) => {
    return container.querySelectorAll(selector)
  }

  public stripHash: StripHash = (idString = '') => {
    return idString && idString.indexOf('#') > -1
      ? idString.substr(1, idString.length)
      : idString
  }

  public findParentNode: FindParentNode = (options, child) => {
    let parentToChild = child?.parentNode as HTMLDivElement
    const searchByClassName = options.hasOwnProperty('className')
    const searchByTagName = options.hasOwnProperty('tagName')
    const searchByByAttributeName = options.hasOwnProperty('attributeName')

    if (searchByClassName) {
      while (!parentToChild?.classList.contains(options.className as string)) {
        if (
          !parentToChild.parentNode ||
          parentToChild.parentNode === document.body
        ) {
          return document.body as HTMLBodyElement
        }

        parentToChild = parentToChild.parentNode as HTMLDivElement
      }
    } else if (searchByTagName) {
      while (parentToChild?.tagName !== options.tagName?.toUpperCase()) {
        if (
          !parentToChild.parentNode ||
          parentToChild.parentNode === document.body
        ) {
          return document.body as HTMLBodyElement
        }

        parentToChild = parentToChild.parentNode as HTMLDivElement
      }
    } else if (searchByByAttributeName) {
      while (!parentToChild.hasAttribute(options.attributeName as string)) {
        if (
          !parentToChild.parentNode ||
          parentToChild.parentNode === document.body
        ) {
          return document.body as HTMLBodyElement
        }

        parentToChild = parentToChild.parentNode as HTMLDivElement
      }
    }

    return parentToChild as HTMLDivElement
  }

  // FUNCTIONAL
  public enableTabbing: HanldeTabbing = (target, selector = '[tabindex]') => {
    const allElems = Array.from(this.getAllElems(target, selector))
    allElems.map((elm) => elm.setAttribute('tabindex', '0'))
    target.setAttribute('aria-hidden', 'false')
  }

  public disableTabbing: HanldeTabbing = (target, selector = '[tabindex]') => {
    const allElems = Array.from(this.getAllElems(target, selector))
    allElems.map((elm) => elm.setAttribute('tabindex', '-1'))
    target.setAttribute('aria-hidden', 'true')
  }

  public setTargetSelected: SetTargetSelectedType = (target) => {
    target.classList.add(this.CONSTS.OPTION_SELECTOR_IS_SELECTED)
  }

  public setParentChoiceInactive: SetParentChoiceInactiveType = (
    target = null
  ) => {
    const className = this.CONSTS.OPTION_SELECTOR_PANEL
    const choiceMadeClass = this.CONSTS.OPTION_SELECTOR_IS_CHOICE_MADE
    const panel = this.findParentNode({ className }, target)

    this.disableTabbing(panel, `${this.CONSTS.OPTION_SELECTOR_NEXTBUTTON}`)
    panel.classList.remove(choiceMadeClass)
  }

  public setParentChoiceActive: SetParentChoiceActiveType = (target = null) => {
    const nextClass = this.CONSTS.OPTION_SELECTOR_DATA_NEXT
    const className = this.CONSTS.OPTION_SELECTOR_PANEL
    const panel = this.findParentNode({ className }, target)
    const nextId = target
      ? this.stripHash(target.getAttribute(nextClass) as string)
      : null

    this.enableTabbing(panel, `.${this.CONSTS.OPTION_SELECTOR_NEXTBUTTON}`)
    panel.classList.add(this.CONSTS.OPTION_SELECTOR_IS_CHOICE_MADE)
    panel.setAttribute(this.CONSTS.OPTION_SELECTOR_DATA_CHOICE, `${nextId}`)
  }

  public autoProgressHandler: AutoProgressHandlerType = (target) => {
    const panelEl = this.findParentNode(
      { className: this.CONSTS.OPTION_SELECTOR_PANEL },
      target
    )

    const nextButtonEl = this.getElem(
      panelEl,
      `.${this.CONSTS.OPTION_SELECTOR_NEXTBUTTON}`
    )

    if (nextButtonEl) {
      nextButtonEl.click()
    }
  }

  public setTabToNextState: SetTabToNextStateType = (target) => {
    const elCL = target.classList
    const isChoiceMade = elCL.contains(
      this.CONSTS.OPTION_SELECTOR_IS_CHOICE_MADE
    )
    const choiceNotRequired = elCL.contains(
      this.CONSTS.OPTION_SELECTOR_NO_CHOICE_REQUIRED
    )

    if (isChoiceMade || choiceNotRequired) {
      this.enableTabbing(target, `.${this.CONSTS.OPTION_SELECTOR_NEXTBUTTON}`)
    } else {
      this.disableTabbing(target, `.${this.CONSTS.OPTION_SELECTOR_NEXTBUTTON}`)
    }
  }

  public resetSelectedOptions: ResetSelectedOptionsType = (target) => {
    const className = this.CONSTS.OPTION_SELECTOR_PANEL
    const panelEl = this.findParentNode({ className }, target)
    const selectedClass = this.CONSTS.OPTION_SELECTOR_IS_SELECTED
    const els = Array.from(this.getAllElems(panelEl, `.${selectedClass}`))
    els.map((el) => el.classList.remove(selectedClass))
  }

  public clearSelectedState: ClearSelectedStateType = (panelEl) => {
    const selectedClass = this.CONSTS.OPTION_SELECTOR_IS_SELECTED
    const els = Array.from(this.getAllElems(panelEl, `.${selectedClass}`))
    els.map((el) => el.classList.remove(selectedClass))

    panelEl.classList.remove(this.CONSTS.OPTION_SELECTOR_IS_CHOICE_MADE)
  }

  public fireEvent: FireEvent = (elm, evt, data) => {
    let event
    data = data || {}

    event = new Event(evt, { bubbles: true, cancelable: true, ...data })
    elm.dispatchEvent(event)
  }
}
