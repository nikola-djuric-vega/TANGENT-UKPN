import {
  AccordionItemType,
  CategoryItemTitle,
} from '_types/CMS/nodes/components/UKPN/accordion'

export const filterByCategory = (
  categoryName: CategoryItemTitle | undefined,
  arrayToSort: AccordionItemType[]
) => {
  let filteredItems = arrayToSort?.filter((item) => {
    return item?.categories?.some((cat) => cat.name === categoryName)
  })

  return filteredItems
}
