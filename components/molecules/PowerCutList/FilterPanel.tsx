import { Filter, PowerCutListState, SortFilterTypes } from './PowerCutList'
import { ModalState, toggleModal } from '_utils/toggle-modal'
import RadioButton from '_atoms/RadioButton/RadioButton'
import Button from '_atoms/Button&Link/Button/Button'
import { PowerCutType } from '_types/local/incidents'
import useOnClickOutside from '_hooks/onClickOutside'
import { SelectStylesFilter } from './select-styles'
import React, { useEffect, useRef } from 'react'
import Checkbox from '_atoms/Checkbox/Checkbox'
import styles from './FilterPanel.module.scss'
import { ButtonAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import dynamic from 'next/dynamic'
import Select from 'react-select'

interface FilterPanelProps {
  setPowerCutListState: React.Dispatch<React.SetStateAction<PowerCutListState>>
  handleFiltersChangeClick: (filter: PowerCutType) => void
  getPowerCutNumber: (type?: PowerCutType) => number
  handleShow: (filters: string[]) => void
  PowerCutListState: PowerCutListState
  sortFilters: SortFilterTypes[]
  filters: Filter[]
}
const CustomSelect = dynamic(() => import('react-select')) as typeof Select

const FilterPanel = ({
  handleFiltersChangeClick,
  setPowerCutListState,
  getPowerCutNumber,
  PowerCutListState,
  sortFilters,
  handleShow,
  filters,
}: FilterPanelProps) => {
  const generateOptions = sortFilters.map((item) => ({
    value: item,
    label: item,
  }))

  useEffect(() => {
    if (PowerCutListState.isFilterPanel) {
      window.addEventListener('keydown', handleEscapeKeyDown, { passive: true })
    } else {
      window.removeEventListener('keydown', handleEscapeKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKeyDown)
    }
  }, [PowerCutListState.isFilterPanel])

  const handleEscapeKeyDown = (e: KeyboardEvent) => {
    e.key === 'Escape' ? closeFilterPanel() : null
  }

  const filterPanelInnerRef = useRef(null)
  useOnClickOutside(filterPanelInnerRef, () => {
    setPowerCutListState((prevState) => ({
      ...prevState,
      isFilterPanel: false,
    }))
    toggleModal(ModalState.CLOSE)
  })

  const closeFilterPanel = () => {
    setPowerCutListState((prevState) => ({
      ...prevState,
      isFilterPanel: false,
      isSortPanel: false,
    }))
    toggleModal(ModalState.CLOSE)
  }

  const openSortPanel = () =>
    setPowerCutListState((prevState) => ({
      ...prevState,
      isSortPanel: true,
    }))

  const closeSortPanel = () =>
    setPowerCutListState((prevState) => ({
      ...prevState,
      isSortPanel: false,
    }))

  const handleSortClick = (sortFilter: SortFilterTypes) => {
    setPowerCutListState((prevState) => ({
      ...prevState,
      activeSort: sortFilter,
      isSortPanel: false,
    }))
  }

  const setSelectedSortOption = (option: { value: string; label: string }) => {
    setPowerCutListState((prevState) => ({
      ...prevState,
      activeSort: option.value,
      CAAscending:
        option.value === SortFilterTypes.CUSTOMERS_AFFECTED_ASCENDING,
      TRAscending: option.value === SortFilterTypes.DATA_OLDEST_FIRST,
    }))
  }

  return (
    <div
      className={styles.filterPanel}
      data-is-filter-open={PowerCutListState.isFilterPanel}
    >
      <div className={styles.filterInner} ref={filterPanelInnerRef}>
        <p className={styles.filterTitle}>Filter</p>
        <Button
          className={styles.closeFilterPanelButton}
          appearance={ButtonAppearance.DEFAULT}
          onClick={closeFilterPanel}
          type="button"
        >
          <Icon name={IconNames.ICO_CLOSE} />
        </Button>
        {PowerCutListState.isMobile ? (
          <Button
            appearance={ButtonAppearance.DEFAULT}
            className={styles.sortPanelButton}
            onClick={openSortPanel}
            data-testid="sortPanel"
            type="button"
          >
            <div className={styles.sortPanelButtontext}>
              <p className={styles.sortPanelLabel}>Sort by</p>
              <p className={styles.sortPanelTitle}>
                {PowerCutListState.activeSort}
              </p>
            </div>
            <p className={styles.chevronIcon}>
              <Icon name={IconNames.ICON_CHEVRON_RIGHT} />
            </p>
          </Button>
        ) : (
          <div className={styles.customSelectWrapper}>
            <CustomSelect
              onChange={(option: any) => setSelectedSortOption(option)}
              placeholder="Date (Latest first)"
              aria-label="Sort by selector"
              styles={SelectStylesFilter}
              inputId="Sort by selector"
              options={generateOptions}
              name="Sort by selector"
              isSearchable={false}
            />
            <span className={styles.sortByTitle}>Sort by</span>
          </div>
        )}

        <div className={styles.filtersPanel}>
          <div className={styles.filterPanelItem}>
            <p className={styles.filterItemTitle}>
              All
              {` (${getPowerCutNumber()})`}
            </p>
            <Checkbox
              aria-label="All"
              name="All"
              id="All"
              innerClassName={styles.checkboxItem}
              checked={PowerCutListState.activeFilters.length < 1}
              onChange={() =>
                setPowerCutListState((prevState) => ({
                  ...prevState,
                  activeFilters: [],
                }))
              }
            />
          </div>
          {filters.map((flt, i: number) => (
            <div className={styles.filterPanelItem} key={i}>
              <p className={styles.filterItemTitle}>
                {flt.color && (
                  <span data-color={flt.color} className={styles.filterColor} />
                )}
                {flt.icon && (
                  <span className={styles.filterIcon}>
                    <Icon name={flt.icon} baseColour />
                  </span>
                )}
                {flt.label}
                {` (${getPowerCutNumber(flt.type)})`}
              </p>
              <Checkbox
                name={flt.label}
                id={flt.label}
                innerClassName={styles.checkboxItem}
                checked={PowerCutListState.activeFilters.includes(flt.type)}
                onChange={() => handleFiltersChangeClick(flt.type)}
                aria-label={flt.label}
              />
            </div>
          ))}
        </div>
        <div className={styles.bottomFilterPanel}>
          <Button
            appearance={ButtonAppearance.PRIMARY}
            className={styles.showButton}
            type="button"
            onClick={() => {
              handleShow(PowerCutListState.activeFilters)
            }}
          >
            Show
          </Button>
          <Button
            appearance={ButtonAppearance.DEFAULT}
            className={styles.clearAllButton}
            type="button"
            onClick={() => {
              setPowerCutListState((prevState) => ({
                ...prevState,
                activeFilters: [],
              }))
            }}
          >
            Clear all
          </Button>
        </div>
        {PowerCutListState.isMobile && (
          <div
            className={styles.sortPanel}
            data-is-sort-open={PowerCutListState.isSortPanel}
          >
            <div className={styles.sortPanelTop}>
              <Button
                className={styles.sortPanelTopCTAs}
                appearance={ButtonAppearance.DEFAULT}
                data-testid="closeSortPanel"
                onClick={closeSortPanel}
                type="button"
              >
                <Icon name={IconNames.LEFT_CHEVRON} />
              </Button>
              Sort
              <Button
                className={styles.sortPanelTopCTAs}
                appearance={ButtonAppearance.DEFAULT}
                onClick={closeFilterPanel}
                type="button"
              >
                <Icon name={IconNames.ICO_CLOSE} />
              </Button>
            </div>
            <div className={styles.sortPanelFilters}>
              <div className={styles.sortPanelFilter}>
                <RadioButton
                  value={SortFilterTypes.DATE_LATEST_FIRST}
                  setOption={() =>
                    handleSortClick(SortFilterTypes.DATE_LATEST_FIRST)
                  }
                  name={SortFilterTypes.DATE_LATEST_FIRST}
                  checked={
                    PowerCutListState.activeSort ===
                    SortFilterTypes.DATE_LATEST_FIRST
                  }
                />
              </div>
              <div className={styles.sortPanelFilter}>
                <RadioButton
                  value={SortFilterTypes.DATA_OLDEST_FIRST}
                  setOption={() =>
                    handleSortClick(SortFilterTypes.DATA_OLDEST_FIRST)
                  }
                  name={SortFilterTypes.DATA_OLDEST_FIRST}
                  checked={
                    PowerCutListState.activeSort ===
                    SortFilterTypes.DATA_OLDEST_FIRST
                  }
                />
              </div>
              <div className={styles.sortPanelFilter}>
                <RadioButton
                  value={SortFilterTypes.CUSTOMERS_AFFECTED_ASCENDING}
                  setOption={() =>
                    handleSortClick(
                      SortFilterTypes.CUSTOMERS_AFFECTED_ASCENDING
                    )
                  }
                  name={SortFilterTypes.CUSTOMERS_AFFECTED_ASCENDING}
                  checked={
                    PowerCutListState.activeSort ===
                    SortFilterTypes.CUSTOMERS_AFFECTED_ASCENDING
                  }
                />
              </div>
              <div className={styles.sortPanelFilter}>
                <RadioButton
                  value={SortFilterTypes.CUSTOMERS_AFFECTED_DESCENDING}
                  setOption={() =>
                    handleSortClick(
                      SortFilterTypes.CUSTOMERS_AFFECTED_DESCENDING
                    )
                  }
                  name={SortFilterTypes.CUSTOMERS_AFFECTED_DESCENDING}
                  checked={
                    PowerCutListState.activeSort ===
                    SortFilterTypes.CUSTOMERS_AFFECTED_DESCENDING
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterPanel
