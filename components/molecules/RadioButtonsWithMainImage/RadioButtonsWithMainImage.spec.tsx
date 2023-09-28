import RadioButtonsWithMainImage, {
  RadioButtonsWithMainImageProps,
} from './RadioButtonsWithMainImage'
import { fireEvent, render, act } from '@testing-library/react'
import { PageTypeNames } from '_types/CMS'
import { Formik } from 'formik'

const mockData: RadioButtonsWithMainImageProps = {
  mandatory: false,
  __typename: PageTypeNames.RADIO_BUTTONS_WITH_MAIN_IMAGE,
  radioButtonWithImageMainImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/d1mfic3t/wind-farm.jpg',
    name: 'Wind farm',
  },
  radioButtonWithImageText: 'Do you like wind?',
  radioButtonWithImageOptions: ['Yes', 'No'],
  id: '2',
  contentTypeAlias: '',
  url: '',
}

const mockData1: RadioButtonsWithMainImageProps = {
  mandatory: false,
  __typename: PageTypeNames.RADIO_BUTTONS_WITH_MAIN_IMAGE,
  radioButtonWithImageMainImage: {
    url: 'https://media.umbraco.io/dev-uk-power-networks/d1mfic3t/wind-farm.jpg',
    name: 'Wind farm',
  },
  radioButtonWithImageText: 'Do you like wind?',
  radioButtonWithImageOptions: ['Yes', 'No'],
  id: '2',
  contentTypeAlias: '',
  url: '',
}

describe('RadioButtonsWithMainImage test', () => {
  it('shall render RadioButtonsWithMainImage ', async () => {
    const { getByText } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <RadioButtonsWithMainImage {...mockData} />
      </Formik>
    )
    const yesRadioButton = getByText('Yes')
    const noRadioButton = getByText('No')
    const label = getByText('Do you like wind?')

    expect(yesRadioButton).toBeInTheDocument()
    expect(noRadioButton).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    await act(async () => {
      fireEvent.click(yesRadioButton)
    })
  })
})
