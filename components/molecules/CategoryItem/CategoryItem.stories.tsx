import { CategoryItemTitle } from '_types/CMS/nodes/components/UKPN'
import CategoryItem, { CategoryItemProps } from './CategoryItem'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'

export default {
  title: 'Molecules/CategoryItem',
  component: CategoryItem,
} as Meta

const Template: Story<CategoryItemProps> = (args) => <CategoryItem {...args} />

export const Default = Template.bind({})
Default.args = {
  index: 0,
  category: { name: CategoryItemTitle.YOUR_PROPERTY, icon: IconNames.PROPERTY },
  activeCategory: 0,
}
