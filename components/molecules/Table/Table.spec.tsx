import { render } from '@testing-library/react'
import { ComponentsTypeName } from '_types/CMS'
import Table from './Table'
import React from 'react'

import {
  TableColumnType,
  TableRowType,
  TableType,
} from '_types/CMS/nodes/components/UKPN'

const mockRowTypes1: TableRowType[] = [
  { cellContent: 'Cell 11' },
  { cellContent: 'Cell 12' },
  { cellContent: 'Cell 13' },
]
const mockRowTypes2: TableRowType[] = [
  { cellContent: 'Cell 21' },
  { cellContent: 'Cell 22' },
  { cellContent: 'Cell 23' },
]

const mockColumnTypes: TableColumnType[] = [
  { rows: mockRowTypes1 },
  { rows: mockRowTypes2 },
]

const mockProps: TableType = {
  __typename: ComponentsTypeName.TABLE,
  columns: mockColumnTypes,
}

describe('Table Test', () => {
  it('should render a table for phone and mobile', () => {
    const screen = render(<Table {...mockProps} />)

    const elements = screen.getAllByText('Cell 13')

    expect(elements[0]).toBeInTheDocument()
    expect(elements[1]).toBeInTheDocument()
  })
})
