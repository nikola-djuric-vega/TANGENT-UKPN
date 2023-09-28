import { UsefulLinksType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS/base'
import { Story, Meta } from '@storybook/react'
import UsefulLinks from './UsefulLinks'
import { LinkType } from '_types/CMS'
import React from 'react'

export default {
  title: 'Molecules/UsefulLinks',
  component: UsefulLinks,
} as Meta<UsefulLinksType>

const Template: Story<UsefulLinksType> = (args) => <UsefulLinks {...args} />

export const Default = Template.bind({})
export const UsefulLinksData: UsefulLinksType = {
  __typename: ComponentsTypeName.USEFUL_LINKS,
  title: 'Useful links',
  whiteBackground: true,
  usefulLinkItems: [
    {
      title: 'Coronavirus (COVID-19): UK government response',
      link: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'Coronavirus (COVID-19): UK government response',
      },
    },
    {
      title: 'Latest information from the MET office',
      link: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'NHS 111 Online',
      },
    },
    {
      title: 'Latest information from the MET office',
      link: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'Energy Networks Association',
      },
    },
    {
      title: 'Latest information from the MET office',
      link: {
        type: LinkType.EXTERNAL,
        url: 'http://google.com',
        name: 'test',
      },
    },
  ],
}

Default.args = UsefulLinksData
