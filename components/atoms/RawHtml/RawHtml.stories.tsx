import { RawHtml as RawHtmlType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'
import { Story, Meta } from '@storybook/react'
import RawHtml from './RawHtml'
import React from 'react'

export default {
  title: 'Atoms/RawHtml',
  component: RawHtml,
} as Meta

export const rawHtmlMock: RawHtmlType = {
  __typename: ComponentsTypeName.RAW_HTML,
  rawHtml: `
    <div>
      <p id="html-text">This is <em>raw</em> <strong>html</strong></p>
    </div>
  `,
  scriptUrl: `http://localhost:6006/test`,
}

const Template: Story<RawHtmlType> = (args) => <RawHtml {...args} />

export const Default = Template.bind({})

Default.args = rawHtmlMock
