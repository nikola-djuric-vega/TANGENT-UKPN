import { transformIncidentsListData } from '_utils/transform-incidents-list-data'
import PowerCutListItem from '_molecules/PowerCutListItem/PowerCutListItem'
import { useDictionaryItems } from '_context/dictionary-items'
import { ModalState, toggleModal } from '_utils/toggle-modal'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import React, { useEffect, useRef, useState } from 'react'
import { IncidentDto } from '_types/local/incident-dto'
import Button from '_atoms/Button&Link/Button/Button'
import { IconNames, Option } from '_types/local'
import styles from './PowerCutList.module.scss'
import RichText from '_atoms/RichText/RichText'
import ReactPaginate from 'react-paginate'
import camelCase from 'lodash/camelCase'
import FilterPanel from './FilterPanel'
import debounce from 'lodash/debounce'
import Input from '_atoms/Input/Input'
import Icon from '_atoms/Icon/Icon'
import {
  ExtraPropertiesItem,
  IncidentListItem,
  PowerCutType,
} from '_types/local/incidents'
import PulsingAnimation, {
  PulsingAnimationTheme,
} from '_atoms/PulsingAnimation/PulsingAnimation'

export interface PowerCutListProps {
  incidents: IncidentDto[]
  extraProperties: ExtraPropertiesItem[]
}
export interface Filter extends Option {
  type: PowerCutType
  icon?: IconNames
  color?: string
  checked?: boolean
}

export enum SortFilterTypes {
  DATE_LATEST_FIRST = 'Date (Latest first)',
  DATA_OLDEST_FIRST = 'Date (Oldest first)',
  CUSTOMERS_AFFECTED_ASCENDING = 'Customers affected (Ascending)',
  CUSTOMERS_AFFECTED_DESCENDING = 'Customers affected (Descending)',
}

export const incidentsTypes: Filter[] = [
  {
    label: 'Power cut',
    value: 'Unplanned',
    type: PowerCutType.UNPLANNED_INCIDENT,
    icon: IconNames.ICON_LOCATION,

    color: 'orange',
  },
  {
    label: 'Planned work',
    value: 'Planned',
    type: PowerCutType.PLANNED_INCIDENT,
    icon: IconNames.PLANNED_PC,
    color: 'blue',
  },
  {
    label: 'Restored',
    value: 'Restored',
    type: PowerCutType.RESTORED_INCIDENT,
    icon: IconNames.FORTY_PX_SUCCESS,
    color: 'green',
  },
]

export interface PowerCutListState {
  pages: IncidentListItem[][]
  activeFilters: string[]
  isFilterPanel: boolean
  isSortPanel: boolean
  TRAscending: boolean
  CAAscending: boolean
  currentPage?: number
  activeSort: string
  isMobile: boolean
}

const PowerCutList = ({ incidents, extraProperties }: PowerCutListProps) => {
  const searchValue = useRef<string>('')
  const dictionary = useDictionaryItems()
  const resultsList = useRef<HTMLDivElement>(null)

  const transformedIncidents = transformIncidentsListData(
    incidents,
    extraProperties,
    dictionary
  )

  const createPages = (array: IncidentListItem[]) => {
    let pages: IncidentListItem[][] = []
    let itemsOnPage = 24
    for (let i = 0; i < array.length; i += itemsOnPage) {
      pages = [...pages, array.slice(i, i + itemsOnPage)]
    }
    return pages
  }

  const [PowerCutListState, setPowerCutListState] = useState<PowerCutListState>(
    {
      activeSort: SortFilterTypes.DATE_LATEST_FIRST,
      pages: createPages(transformedIncidents),
      isFilterPanel: false,
      isSortPanel: false,
      TRAscending: false,
      CAAscending: false,
      activeFilters: [],
      isMobile: false,
    }
  )

  const sortFilters: SortFilterTypes[] = [
    SortFilterTypes.DATE_LATEST_FIRST,
    SortFilterTypes.DATA_OLDEST_FIRST,
    SortFilterTypes.CUSTOMERS_AFFECTED_ASCENDING,
    SortFilterTypes.CUSTOMERS_AFFECTED_DESCENDING,
  ]

  const handleResize = debounce(() => {
    setPowerCutListState((prevState) => ({
      ...prevState,
      isMobile: window.innerWidth < 980,
    }))
  }, 500)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (resultsList.current && (PowerCutListState.currentPage as number) >= 0) {
      resultsList.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
        block: 'start',
      })
    }
  }, [PowerCutListState.currentPage, PowerCutListState.activeFilters])

  const filters: Filter[] = [...incidentsTypes]

  const filterByPostCode = (
    transformedIncidents: IncidentListItem[],
    value: string
  ) => {
    if (value) {
      return transformedIncidents.filter((inc) =>
        inc.affectedPostcodes.find((pstc) =>
          pstc.toLowerCase().includes(value.toLowerCase())
        )
      )
    } else {
      return transformedIncidents
    }
  }

  const handleSearchPostcode = debounce(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value
      let incidentsByPostecode: IncidentListItem[]

      incidentsByPostecode = filterByPostCode(transformedIncidents, value)

      let filteredIncidents: IncidentListItem[] = []
      if (PowerCutListState.activeFilters.length > 0) {
        filteredIncidents = incidentsByPostecode.filter((inc) =>
          PowerCutListState.activeFilters.includes(inc.type)
        )
      } else {
        filteredIncidents = incidentsByPostecode
      }

      searchValue.current = value

      setPowerCutListState((prev) => ({
        ...prev,
        pages: createPages(filteredIncidents),
        currentPage: 0,
      }))
      handleResize()
    },
    500
  )

  const currentPageAsNumber = !PowerCutListState.currentPage
    ? 0
    : PowerCutListState.currentPage

  const sortByTime = () => {
    PowerCutListState.pages.map((page) => {
      if (PowerCutListState.TRAscending) {
        const sortedByTimeReported = page.sort(
          (a, b) =>
            new Date(b.moreInfo.receivedDate).getTime() -
            new Date(a.moreInfo.receivedDate).getTime()
        )
        return sortedByTimeReported
      } else {
        const sortedByTimeReported = page.sort(
          (a, b) =>
            new Date(a.moreInfo.receivedDate).getTime() -
            new Date(b.moreInfo.receivedDate).getTime()
        )
        return sortedByTimeReported
      }
    })
  }

  const getPowerCutNumber = (type?: PowerCutType) => {
    if (type === PowerCutType.RESTORED_INCIDENT) {
      return transformedIncidents.filter(
        (incident) => incident.type === 'Restored'
      ).length
    } else if (type === PowerCutType.PLANNED_INCIDENT) {
      return transformedIncidents.filter(
        (incident) => incident.type === 'Planned'
      ).length
    } else if (type === PowerCutType.UNPLANNED_INCIDENT) {
      return transformedIncidents.filter(
        (incident) => incident.type === 'Unplanned'
      ).length
    } else {
      return transformedIncidents.length
    }
  }

  const sortTimeReported = () => {
    sortByTime()
    setPowerCutListState((prevState) => ({
      ...prevState,
      TRAscending: !PowerCutListState.TRAscending,
    }))
  }

  const getCustomersAffectedWithNumber = (array: IncidentListItem[]) => {
    const customersAffectedWithNumber = array.filter(
      (item) => typeof item.customersAffected === 'number'
    )

    if (PowerCutListState.CAAscending) {
      const sortedByCustomersAffected = customersAffectedWithNumber.sort(
        (a, b) => Number(b.customersAffected) - Number(a.customersAffected)
      )
      return sortedByCustomersAffected
    } else {
      const sortedByCustomersAffected = customersAffectedWithNumber.sort(
        (a, b) => {
          return Number(a.customersAffected) - Number(b.customersAffected)
        }
      )
      return sortedByCustomersAffected
    }
  }

  const getCustomersAffectedWithString = (array: IncidentListItem[]) => {
    const customersAffectedString = array.filter(
      (inc) => typeof inc.customersAffected !== 'number'
    )
    return customersAffectedString
  }

  const sortyByCustomersAffected = (array: IncidentListItem[]) => {
    const sortedByCA = getCustomersAffectedWithNumber(array).concat(
      getCustomersAffectedWithString(array).flat()
    )

    setPowerCutListState((prev) => ({
      ...prev,
      CAAscending: !PowerCutListState.CAAscending,
      pages: createPages(sortedByCA),
      currentPage: 0,
    }))
    return sortedByCA
  }

  const handleFiltersChangeClick = (filter: PowerCutType) => {
    let currentFilters = [...PowerCutListState.activeFilters]

    if (currentFilters.length < 1) {
      currentFilters.push(filter)
    } else if (currentFilters.length > 0 && !currentFilters.includes(filter)) {
      currentFilters.push(filter)
    } else {
      currentFilters = currentFilters.filter((item) => item !== filter)
    }

    setPowerCutListState((prevState) => ({
      ...prevState,
      activeFilters: currentFilters,
    }))

    {
      !PowerCutListState.isMobile &&
        !PowerCutListState.isFilterPanel &&
        handleShow(currentFilters)
    }
  }

  const handleShow = (filters: string[]) => {
    toggleModal(ModalState.CLOSE)
    setPowerCutListState((prevState) => ({
      ...prevState,
      isFilterPanel: false,
    }))

    let sortedList = transformedIncidents.filter((inc) =>
      filters.includes(inc.type)
    )
    if (filters.length > 0) {
      if (PowerCutListState.activeSort === SortFilterTypes.DATE_LATEST_FIRST) {
        sortedList = sortedList.sort(
          (a, b) =>
            new Date(b.moreInfo.receivedDate).getTime() -
            new Date(a.moreInfo.receivedDate).getTime()
        )
      } else if (
        PowerCutListState.activeSort === SortFilterTypes.DATA_OLDEST_FIRST
      ) {
        sortedList = sortedList.sort(
          (a, b) =>
            new Date(a.moreInfo.receivedDate).getTime() -
            new Date(b.moreInfo.receivedDate).getTime()
        )
      } else {
        sortedList = getCustomersAffectedWithNumber(sortedList)
          .reverse()
          .concat(getCustomersAffectedWithString(sortedList))
      }

      setPowerCutListState((prevState) => ({
        ...prevState,
        pages: createPages(sortedList),
        currentPage: 0,
        filters,
      }))
    } else {
      let sortedList: IncidentListItem[] = []

      if (PowerCutListState.activeSort === SortFilterTypes.DATE_LATEST_FIRST) {
        sortedList = transformedIncidents.sort(
          (a, b) =>
            new Date(b.moreInfo.receivedDate).getTime() -
            new Date(a.moreInfo.receivedDate).getTime()
        )
      } else if (
        PowerCutListState.activeSort === SortFilterTypes.DATA_OLDEST_FIRST
      ) {
        sortedList = transformedIncidents.sort(
          (a, b) =>
            new Date(a.moreInfo.receivedDate).getTime() -
            new Date(b.moreInfo.receivedDate).getTime()
        )
      } else {
        sortedList = getCustomersAffectedWithNumber(transformedIncidents)
          .reverse()
          .concat(getCustomersAffectedWithString(transformedIncidents))
      }

      setPowerCutListState((prevState) => ({
        ...prevState,
        pages: createPages(sortedList),
        currentPage: 0,
        filters,
      }))
    }
    handleResize()
  }

  const openFilterPanel = () => {
    toggleModal(ModalState.OPEN)
    setPowerCutListState((prevState) => ({
      ...prevState,
      isFilterPanel: true,
    }))
  }

  return (
    <section className={styles.PowerCutList} ref={resultsList}>
      <div className={styles.inner}>
        <div className={styles.topPanelWrapper}>
          <div className={styles.topPanel}>
            <PulsingAnimation
              text="LIVE"
              theme={PulsingAnimationTheme.ORANGE}
            />
            <Button
              className={styles.filterButton}
              appearance={ButtonAppearance.SECONDARY}
              color={ButtonColors.DARK}
              onClick={openFilterPanel}
              icon={IconNames.FILTER}
              type="button"
            >
              Filter
            </Button>
            <div className={styles.searchFilters}>
              <Button
                appearance={ButtonAppearance.DEFAULT}
                data-selected={PowerCutListState.activeFilters.length < 1}
                onClick={() =>
                  setPowerCutListState((prevState) => ({
                    ...prevState,
                    activeFilters: [],
                    pages: createPages(transformedIncidents),
                  }))
                }
                className={styles[camelCase('All')]}
                data-testid={'All'}
                type="button"
              >
                All
                {` (${getPowerCutNumber()})`}
              </Button>
              {filters.map((flt, i) => (
                <Button
                  data-selected={PowerCutListState.activeFilters.includes(
                    flt.type
                  )}
                  onClick={() => handleFiltersChangeClick(flt.type)}
                  className={styles[camelCase(flt.label)]}
                  appearance={ButtonAppearance.DEFAULT}
                  data-testid={flt.label}
                  data-color={flt.type}
                  type="button"
                  key={i}
                >
                  {flt.icon && (
                    <span className={styles.filterIcon}>
                      <Icon name={flt.icon} baseColour />
                    </span>
                  )}
                  {flt.label}
                  {` (${getPowerCutNumber(flt.type)})`}
                  {flt.color && (
                    <span
                      data-color={flt.color}
                      className={styles.filterColor}
                    />
                  )}
                </Button>
              ))}
            </div>
          </div>
          <div className={styles.labelWrapper}>
            <label className={styles.postcodeSearch} htmlFor="searchByPostcode">
              <Icon name={IconNames.ICON_SEARCH} />
              <Input
                onKeyDown={(e) => handleSearchPostcode(e)}
                placeholder="Search by postcode"
                id="searchByPostcode"
              />
            </label>
          </div>
        </div>
        <div className={styles.results}>
          <div className={styles.resultsHeader}>
            <p className={styles.typeName}>Power cut type</p>
            <p className={styles.affecPostcode}>Affected postcodes</p>
            <p className={styles.moreInfo}>More information</p>
            <Button
              data-is-ascending={PowerCutListState.TRAscending}
              appearance={ButtonAppearance.DEFAULT}
              onClick={sortTimeReported}
              className={styles.timeReported}
              type="button"
            >
              <span>Time reported</span>
              <span
                data-is-ascending={PowerCutListState.TRAscending}
                className={styles.chevron}
              >
                <Icon name={IconNames.DOWN_CHEVRON} />
              </span>
            </Button>
            <Button
              onClick={() =>
                sortyByCustomersAffected(PowerCutListState.pages.flat())
              }
              appearance={ButtonAppearance.DEFAULT}
              className={styles.custAffec}
              type="button"
            >
              <span>Customers affected</span>
              <span
                data-is-ascending={PowerCutListState.CAAscending}
                className={styles.chevron}
              >
                <Icon name={IconNames.DOWN_CHEVRON} />
              </span>
            </Button>
          </div>
          {PowerCutListState.pages.length >= 1 ? (
            PowerCutListState.pages[currentPageAsNumber].map((inc, key) => {
              return (
                <PowerCutListItem
                  {...inc}
                  key={inc.incidentId + key}
                  itemKey={Number(inc.incidentId + key)}
                ></PowerCutListItem>
              )
            })
          ) : (
            <div className={styles.notFound}>
              <Icon
                name={IconNames.ICON_NOT_FOUND}
                className={styles.notFoundIcon}
                baseColour
                size="sm"
              />
              <RichText
                text={dictionary.noPowerCutsReported}
                className={styles.notFoundMessage}
              />
            </div>
          )}
        </div>
        {PowerCutListState.pages.length > 1 && (
          <div className={styles.paginateControls}>
            <Button
              appearance={ButtonAppearance.BLANK}
              className={styles.prevButton}
              onClick={() =>
                setPowerCutListState((prev) => ({
                  ...prev,
                  currentPage: currentPageAsNumber - 1,
                }))
              }
              disabled={currentPageAsNumber === 0 && true}
              data-testid="previous"
              type="button"
            >
              {<Icon name={IconNames.CIRCLED_LEFT_ARROW} />}
            </Button>
            <ReactPaginate
              previousClassName={styles.hideButtons}
              activeClassName={styles.activePage}
              nextClassName={styles.hideButtons}
              pageClassName={styles.pageThumb}
              className={styles.ReactPaginate}
              breakClassName={styles.break}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              breakLabel="..."
              onPageChange={(page) =>
                setPowerCutListState((prev) => ({
                  ...prev,
                  currentPage: page.selected,
                }))
              }
              forcePage={currentPageAsNumber}
              pageCount={PowerCutListState.pages.length}
            />
            <Button
              appearance={ButtonAppearance.BLANK}
              className={styles.nextButton}
              onClick={() =>
                setPowerCutListState((prev) => ({
                  ...prev,
                  currentPage: currentPageAsNumber + 1,
                }))
              }
              disabled={
                currentPageAsNumber === PowerCutListState.pages.length - 1 &&
                true
              }
              data-testid="next"
              type="button"
            >
              {<Icon name={IconNames.CIRCLED_LEFT_ARROW} flip={true} />}
            </Button>
          </div>
        )}
      </div>
      <FilterPanel
        handleFiltersChangeClick={handleFiltersChangeClick}
        setPowerCutListState={setPowerCutListState}
        getPowerCutNumber={getPowerCutNumber}
        PowerCutListState={PowerCutListState}
        sortFilters={sortFilters}
        handleShow={handleShow}
        filters={filters}
      />
    </section>
  )
}

export default PowerCutList
