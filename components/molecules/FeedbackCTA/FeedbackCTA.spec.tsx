import { ComponentsTypeName, LinkType } from '_types/CMS'
import FeedbackCTA from './FeedbackCTA'
import { render } from '@testing-library/react'
import { FeedbackCTAType } from '_types/CMS/nodes/components/UKPN'

const mockData: FeedbackCTAType = {
  feedbackCTAs: [
    {
      title: 'Website feedback',
      text: 'We are always trying to improve our website for our customers so please let us know what you think of it and how you think we should improve it.',
      cTALink: {
        name: 'Leave us feedback',
        type: LinkType.CONTENT,
        url: '/',
      },
    },
    {
      title: 'Contact us about anything else',
      text: 'If you need a new power supply or want to make changes to your existing supply or need maintenance carried out near overhead power lines then we can help.',
      cTALink: {
        name: 'Contact us',
        type: LinkType.CONTENT,
        url: '/',
      },
    },
  ],
  __typename: ComponentsTypeName.FEEDBACK_CTA,
}

describe('FeedbackCTA test', () => {
  it('shall render FeedbackCTA with mock props ', () => {
    const { queryByText } = render(<FeedbackCTA {...mockData} />)
    const feedback1Title = queryByText('Website feedback')
    const feedback1Text = queryByText(
      'We are always trying to improve our website for our customers so please let us know what you think of it and how you think we should improve it.'
    )
    const feedback1Cta = queryByText('Contact us about anything else')
    const feedback2Title = queryByText('Website feedback')
    const feedback2Text = queryByText(
      'If you need a new power supply or want to make changes to your existing supply or need maintenance carried out near overhead power lines then we can help.'
    )
    const feedback2Cta = queryByText('Contact us')
    expect(feedback1Title).toBeInTheDocument()
    expect(feedback1Text).toBeInTheDocument()
    expect(feedback1Cta).toBeInTheDocument()
    expect(feedback2Title).toBeInTheDocument()
    expect(feedback2Text).toBeInTheDocument()
    expect(feedback2Cta).toBeInTheDocument()
  })
})
