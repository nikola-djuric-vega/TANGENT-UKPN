import { ButtonAppearance, ButtonColors } from '_types/CMS'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './CategoryItem.module.scss'
import Icon from '_atoms/Icon/Icon'
import {
  CategoryItemType,
  CategoryItemTitle,
} from '_types/CMS/nodes/components/UKPN'

export interface CategoryItemProps {
  index: number
  category: CategoryItemType | undefined
  activeCategory: number | undefined
  handleCategoryClick: (
    category: CategoryItemTitle | undefined,
    index: number
  ) => void
}

const CategoryItem = ({
  index,
  category,
  activeCategory,
  handleCategoryClick,
}: CategoryItemProps) => {
  return (
    <Button
      className={styles.categoryButton}
      appearance={ButtonAppearance.DEFAULT}
      color={ButtonColors.DARK}
      key={index}
      data-is-active={index === activeCategory}
      onClick={() => handleCategoryClick(category?.name, index)}
    >
      {category?.icon && (
        <Icon name={category.icon} baseColour={index !== activeCategory} />
      )}
      {category?.name}
    </Button>
  )
}

export default CategoryItem
