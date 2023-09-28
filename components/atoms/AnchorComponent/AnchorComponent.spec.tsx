import React from 'react'
import AnchorComponent from './AnchorComponent'
import { render } from '@testing-library/react'
import { AnchorComponentType } from '_types/CMS/nodes/components/UKPN'
import { ComponentsTypeName } from '_types/CMS'

const mockData: AnchorComponentType = {
  anchorName: 'test',
  __typename: ComponentsTypeName.ANCHOR_COMPONENT,
}

describe('AnchorComponent test', () => {
  it('should render anchor component ', () => {
    const { getByTestId } = render(<AnchorComponent {...mockData} />)
    const span = getByTestId('spanTestID')
    expect(span).toBeInTheDocument()
    expect(span).toHaveAttribute('id', 'test')
  })
})
