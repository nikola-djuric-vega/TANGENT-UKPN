import React from 'react'
import ApplicationStart, { ApplicationStartProps } from './ApplicationStart'
import { render } from '@testing-library/react'

const mockDataWithChecklist: ApplicationStartProps = {
  title: 'title',
  subTitle: 'subTitle',
  checklistItems: ['item1', 'item2'],
  formTitle: 'formTitle',
  checkListTitle: 'checkListTitle',
}

const mockDataFooteronly: ApplicationStartProps = {
  footer: 'footer',
}

describe('Application Start Test', () => {
  it('should render Application Start with checklist ', () => {
    const { getByText } = render(
      <ApplicationStart {...mockDataWithChecklist} />
    )
    const title = getByText('title')
    const subTitle = getByText('subTitle')
    const checkListTitle = getByText('checkListTitle')
    const formTitle = getByText('formTitle')
    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(checkListTitle).toBeInTheDocument()
    expect(formTitle).toBeInTheDocument()
  })

  it('should render Application Start with footer only', () => {
    const { getByText } = render(<ApplicationStart {...mockDataFooteronly} />)
    const footerEl = getByText('footer')
    expect(footerEl).toBeInTheDocument()
  })
})
