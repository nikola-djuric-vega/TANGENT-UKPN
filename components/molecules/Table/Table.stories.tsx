import { TableType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS/base'
import { Story, Meta } from '@storybook/react'
import Table from './Table'
import React from 'react'

export default {
  title: 'Molecules/Table',
  component: Table,
} as Meta<TableType>

const Template: Story<TableType> = (args) => <Table {...args} />

export const Default = Template.bind({})
export const TableData: TableType = {
  __typename: ComponentsTypeName.TABLE,
  columns: [
    {
      rows: [
        {
          cellContent: '<p>Monday</p>',
        },
        {
          cellContent: '<p>column 1 row 2</p>',
        },
        {
          cellContent: '<p>column 1 row 3</p>',
        },
        {
          cellContent: '<p> column 1 row 4</p>',
        },
        {
          cellContent: '<p> column 1 row 5</p>',
        },
        {
          cellContent: '<p> column 1 row 6</p>',
        },
      ],
    },
    {
      rows: [
        {
          cellContent: '<p>Tuesday</p>',
        },
        {
          cellContent: '<p>column 2 row 2</p>',
        },
        {
          cellContent:
            '<p>1. Monday</p><p>2. Tuesday</p><p>3. Wednesday</p><p>4. Thursday</p><p>5. Friday</p>',
        },
        {
          cellContent: '<p> column 2 row 4</p>',
        },
        {
          cellContent: '<p> column 2 row 5</p>',
        },
        {
          cellContent: '<p> column 1 row 6</p>',
        },
      ],
    },
    {
      rows: [
        {
          cellContent: '<p>Wednesday</p>',
        },

        {
          cellContent: '<p>column 3 row 2</p>',
        },

        {
          cellContent: '<p>column 3 row 3</p>',
        },
        {
          cellContent: '<p> column 3 row 4</p>',
        },
        {
          cellContent: '<p> column 3 row 5</p>',
        },
        {
          cellContent: '<p> column 3 row 6</p>',
        },
      ],
    },
    {
      rows: [
        {
          cellContent: '<p>Thursday</p>',
        },

        {
          cellContent: '<p>column 4 row 2</p>',
        },

        {
          cellContent: '<p>column 4 row 3</p>',
        },
        {
          cellContent: '<p> column 4 row 4</p>',
        },
        {
          cellContent: '<p> column 4 row 5</p>',
        },
        {
          cellContent: '<p> column 4 row 6</p>',
        },
      ],
    },
    {
      rows: [
        {
          cellContent: '<p>Friday</p>',
        },
        {
          cellContent: '<p>column 5 row 2</p>',
        },
        {
          cellContent: '<p>column 5 row 3</p>',
        },
        {
          cellContent: '<p> column 5 row 4</p>',
        },
        {
          cellContent: '<p> column 5 row 5</p>',
        },
        {
          cellContent: '<p> column 5 row 6</p>',
        },
      ],
    },
  ],
  columnHighlights: [
    {
      columnNumber: 2,
    },
  ],
  rowHighlights: [
    {
      rowNumber: 3,
    },
  ],
}

Default.args = TableData
