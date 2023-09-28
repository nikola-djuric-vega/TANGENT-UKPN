import LightBoxVideoPlayer from '_molecules/LighboxVideoPlayer/LightboxVideoPlayer'
import AccordionItem from '_molecules/AccordionItem/AccordionItem'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import CategoryItem from '_molecules/CategoryItem/CategoryItem'
import { filterByCategory } from '_utils/filter-by-category'
import { ModalState, toggleModal } from '_utils/toggle-modal'
import { transformUrl } from '_utils/transform-url'
import React, { useEffect, useState } from 'react'
import Link from '_atoms/Button&Link/Link/Link'
import styles from './Accordion.module.scss'
import Heading from '_atoms/Heading/Heading'
import { LinkAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import uniqWith from 'lodash/uniqWith'
import isEqual from 'lodash/isEqual'
import Icon from '_atoms/Icon/Icon'
import {
  AccordionItemType,
  AccordionType,
  CategoryItemTitle,
} from '_types/CMS/nodes/components/UKPN'

export interface AccordionState {
  isItemOpen: boolean
  openedItems: number[]
  activeCategory: number | undefined
  filteredItems: AccordionItemType[] | undefined
}

const Accordion = ({
  accordionTitle,
  accordionItems,
  accordionEnableAlwaysOpen,
  isPowerCut,
  viewMore,
}: AccordionType) => {
  const [isModalOpen, setIsModalOpen] = useState('')
  const [accordionState, setAccordionState] = useState<AccordionState>({
    isItemOpen: false,
    openedItems: [],
    activeCategory: undefined,
    filteredItems: [],
  })

  const openAccordionItem = (index: number) => {
    accordionEnableAlwaysOpen
      ? accordionState.openedItems.includes(index)
        ? setAccordionState((prevState) => ({
            ...prevState,
            openedItems: accordionState.openedItems.filter(
              (item) => item !== index
            ),
            isItemOpen: !accordionState.isItemOpen,
          }))
        : setAccordionState((prevState) => ({
            ...prevState,
            openedItems: [...accordionState.openedItems, index],
            isItemOpen: !accordionState.isItemOpen,
          }))
      : accordionState.openedItems.includes(index)
      ? setAccordionState((prevState) => ({
          ...prevState,
          openedItems: [],
          isItemOpen: false,
        }))
      : setAccordionState((prevState) => ({
          ...prevState,
          openedItems: [index],
          isItemOpen: true,
        }))
  }

  useEffect(() => {
    if (!!categoriesTitles?.length && categoriesTitles[0] !== undefined) {
      setAccordionState((prevState) => ({
        ...prevState,
        activeCategory: undefined,
        filteredItems: accordionItems,
      }))
    } else if (accordionItems?.length) {
      setAccordionState((prevState) => ({
        ...prevState,
        filteredItems: accordionItems,
      }))
    }

    if (!isModalOpen) {
      toggleModal(ModalState.CLOSE)
    }
  }, [accordionItems])

  // get the list of all categories
  const allCategories = accordionItems?.map((item) => {
    return item.categories
  })

  // flatten the array of categories
  const flattenedCategories = allCategories?.flat()

  // get unique categories - remove duplicates
  const uniqueCategories = uniqWith(flattenedCategories, isEqual)

  // get the list of categories titles
  const categoriesTitles = flattenedCategories?.map((item) => item?.name)

  const handleCategoryClick = (
    categoryName: CategoryItemTitle | undefined,
    index: number
  ) => {
    if (index !== accordionState.activeCategory && !!accordionItems?.length) {
      let filteredItems = filterByCategory(categoryName, accordionItems)
      setAccordionState((prevState) => ({
        ...prevState,
        filteredItems: filteredItems,
        openedItems: [],
        activeCategory: index,
      }))
    } else if (
      index === accordionState.activeCategory &&
      !!accordionItems?.length
    ) {
      setAccordionState((prevState) => ({
        ...prevState,
        activeCategory: undefined,
        filteredItems: accordionItems,
      }))
    }
  }

  return (
    <ComponentLayout innerClass={styles.accordion}>
      {isModalOpen && (
        <LightBoxVideoPlayer url={isModalOpen} setState={setIsModalOpen} />
      )}
      <div className={styles.content}>
        {!!accordionTitle && (
          <Heading
            level={3}
            className={styles.title}
            data-is-power-cut={isPowerCut}
          >
            {accordionTitle}
          </Heading>
        )}
        {!!uniqueCategories?.length && uniqueCategories[0]?.name !== undefined && (
          <div className={styles.categories}>
            {uniqueCategories.map((category, index) => (
              <CategoryItem
                key={index}
                index={index}
                category={category}
                activeCategory={accordionState.activeCategory}
                handleCategoryClick={handleCategoryClick}
              />
            ))}
          </div>
        )}
        <dl className={styles.items} role="presentation">
          {accordionState.filteredItems?.map?.((item, index) => (
            <AccordionItem
              key={index}
              accordionItem={item}
              index={index}
              setIsModalOpen={setIsModalOpen}
              openAccordionItem={openAccordionItem}
              isItemOpen={accordionState.openedItems.includes(index)}
            />
          ))}
        </dl>
        {!!viewMore && (
          <div className={styles.viewMoreLinkWrapper}>
            <Link
              className={styles.viewMoreLink}
              url={viewMore.url}
              appearance={LinkAppearance.BLANK}
              target={viewMore.target}
            >
              {viewMore.name}
              <Icon name={IconNames.ARROW_ICON} size="xs" />
            </Link>
          </div>
        )}
      </div>
    </ComponentLayout>
  )
}

export default Accordion
