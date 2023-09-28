import { InformationCardsData } from './InformationCard.stories'
import { transformString } from '_utils/tranform-string'
import InformationCard from './InformationCard'
import { render } from '@testing-library/react'

describe('InformationCard test', () => {
  it('shall render InformationCard', () => {
    const { getByText, getByRole } = render(
      <InformationCard {...InformationCardsData} />
    )
      
    const title = getByText(InformationCardsData.informationCardTitle as string)
    const text = getByText(transformString(InformationCardsData.informationCardText as string))
    const icon = getByRole('graphic')

    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
