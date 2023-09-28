import { fireEvent, render } from '@testing-library/react'
import { ComponentsTypeName, LinkType } from '_types/CMS'
import { ButtonColors, LinkAppearance } from '_types/CMS'
import HelpAndContact from './HelpAndContact'
import React from 'react'
import {
  HelpAndContactLinkType,
  HelpAndContactType,
} from '_types/CMS/nodes/components/UKPN'
import { IconNames } from '_types/local'

const mockProps: HelpAndContactType = {
  __typename: ComponentsTypeName.HELP_AND_CONTACT,
  mainTitle: 'Mock Help and Contact',
  subTitle: 'Subtitle',
  firstFramePromptText: 'Select one of the mock categories to get started',
  helpAndContactTabs: [
    {
      tabTitle: 'Mock Power Cut',
      icon: IconNames.FORTY_PX_POWER_CUT,
      helpAndContactLinkSet: [
        {
          __typename: HelpAndContactLinkType.HELP_AND_CONTACT_LINK_SET_LINK,
          link: {
            type: LinkType.MEDIA,
            name: 'Terms of Connections',
            url: 'https://media.umbraco.io/dev-uk-power-networks/2sia435l/terms_of_connection.pdf',
          },
        },
        {
          __typename: HelpAndContactLinkType.LINK_SET_ITEM,
          title: ' Without power now?',
          subtitle:
            'Enter your postcode to search, track and report a power cut.',
          components: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                name: 'Power cut search',
                url: 'https://www.ukpowernetworks.co.uk/help-and-contact/multiple-or-repeat-power-cuts',
              },
              cTAType: ButtonColors.LIGHT,
            },
            {
              __typename: ComponentsTypeName.SIMPLE_CONTENT,
              text: '<p><a tabindex="0" href="/ukpn/" title="Helpful advice if you have a power cut" aria-hidden="false">Helpful advice if you have a power cut</a></p>\n<p><a tabindex="0" href="/ukpn/" title="I don\'t have electricity: is there a problem with my electricity meter?" aria-hidden="false">I don\'t have electricity: is there a problem with my electricity meter?</a></p>\n<p><a tabindex="0" href="/ukpn/" title="What are trip switches and where can I find them?" aria-hidden="false">What are trip switches and where can I find them?</a></p>\n<p><a tabindex="0" href="/ukpn/" title="When is someone going to fill in the hole that has been left by your employees?" aria-hidden="false">When is someone going to fill in the hole that has been left by your employees?</a></p>',
            },
            {
              __typename: ComponentsTypeName.CONTACT_US,
              contactUsItems: [
                {
                  icon: IconNames.FORTY_PX_CALL,
                  title: 'Call us',
                  text: 'Free to call from a mobile or landline phone. Lines are open 24 hours.',
                  telephone1: '0800 31 63 105 ',
                  telephone2: '105',
                  email: {
                    type: LinkType.EXTERNAL,
                    url: 'test@test.com',
                    name: 'test e title',
                  },
                  twitter: {
                    type: LinkType.EXTERNAL,
                    url: 'https://twitter.com/UKPowerNetworks',
                    name: 'Twitter',
                  },
                  facebook: {
                    type: LinkType.EXTERNAL,
                    url: 'https://www.facebook.com/ukpowernetworks',
                    name: 'Facebook',
                  },
                },
                {
                  icon: IconNames.FORTY_PX_CALL,
                  title: 'Call us',
                  text: 'Free to call from a mobile or landline phone. Lines are open 24 hours.',
                  telephone1: '0800 31 63 105 ',
                  telephone2: '105',
                  email: {
                    type: LinkType.EXTERNAL,
                    url: 'test@test.com',
                    name: 'test e title',
                  },
                  twitter: {
                    type: LinkType.EXTERNAL,
                    url: 'https://twitter.com/UKPowerNetworks',
                    name: 'Twitter',
                  },
                  facebook: {
                    type: LinkType.EXTERNAL,
                    url: 'https://www.facebook.com/ukpowernetworks',
                    name: 'Facebook',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tabTitle: 'Mock Billing and finding out your electricity supplier',
      icon: IconNames.ICON_ADVICE,
      helpAndContactLinkSet: [
        {
          __typename: HelpAndContactLinkType.LINK_SET_ITEM,
          title: 'Who is my electricity supplier?',
          subtitle:
            'Your electricity supplier is the company you choose to buy your electricity from, and who you pay your bills to. If you live in London, the South East and East of England we can help by telling you who the current electricity supplier is for your address.',
          components: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                name: 'Find your supplier',
                url: '/ukpn/mockfindsupplier',
              },
              cTAType: ButtonColors.LIGHT,
            },
          ],
        },
        {
          __typename: HelpAndContactLinkType.LINK_SET_ITEM,
          title: 'What is my Meter Point Administration Number (MPAN)?',
          subtitle:
            'A Meter Point Administration Number, also known as an MPAN, electricity supply number or supply number is a 13-digit reference. A MPAN is used to uniquely identify every electricity supply point in the country. If you live in London, the South East and East of England we can help by telling you our MPAN.',
          components: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                name: 'Find your MPAN',
                url: '/ukpn/mockfindmpan',
              },
              cTAType: ButtonColors.LIGHT,
            },
          ],
        },
      ],
    },
    {
      tabTitle: 'Mock Install something new',
      icon: IconNames.ICON_HOUSE_LIGHT,
      // tabSubtitle: '',
      helpAndContactLinkSet: [
        {
          __typename: HelpAndContactLinkType.LINK_SET_ITEM,
          title: 'New connection',
          subtitle:
            'Find out how much this work might cost and how long it may take to complete.',
          components: [
            {
              __typename: LinkAppearance.PRIMARY,
              uRL: {
                type: LinkType.EXTERNAL,
                name: 'Find out more',
                url: 'http://google.com',
              },
              cTAType: ButtonColors.LIGHT,
            },
            {
              __typename: ComponentsTypeName.CONTACT_US,
              contactUsItems: [
                {
                  icon: IconNames.FORTY_PX_CALL,
                  title: 'Call us',
                  text: 'Free to call from a mobile or landline phone. Lines are open Monday - Friday, 8.30am-5pm.',
                  telephone1: '0800 029 4280',
                  telephone2: '',
                  email: {
                    type: LinkType.EXTERNAL,
                    url: 'test@test.com',
                    name: 'test e title',
                  },
                  twitter: {
                    type: LinkType.EXTERNAL,
                    url: 'https://twitter.com/UKPowerNetworks',
                    name: 'Twitter',
                  },
                  facebook: {
                    type: LinkType.EXTERNAL,
                    url: 'https://www.facebook.com/ukpowernetworks',
                    name: 'Facebook',
                  },
                },
              ],
            },
            {
              __typename: ComponentsTypeName.CONTACT_US,
              contactUsItems: [
                {
                  icon: IconNames.FORTY_PX_CALL,
                  title: 'Call us',
                  text: 'Lines are open Monday - Friday, 8.30am-5pm.',
                  telephone1: '0203 324 1460',
                  telephone2: '',
                  email: {
                    type: LinkType.EXTERNAL,
                    url: 'test@test.com',
                    name: 'test e title',
                  },
                  twitter: {
                    type: LinkType.EXTERNAL,
                    url: 'https://twitter.com/UKPowerNetworks',
                    name: 'Twitter',
                  },
                  facebook: {
                    type: LinkType.EXTERNAL,
                    url: 'https://www.facebook.com/ukpowernetworks',
                    name: 'Facebook',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

describe('Help and Contact', () => {
  it('Render Help and Contact', async () => {
    const screen = render(<HelpAndContact {...mockProps} />)

    //Render initial view
    const element0 = screen.getByText('Mock Help and Contact')
    const element1 = screen.getByText('Mock Power Cut')
    const element2 = screen.getByText(
      'Mock Billing and finding out your electricity supplier'
    )

    const element21a = screen.getAllByText('Who is my electricity supplier?')

    expect(element0).toBeInTheDocument()
    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()

    //Open Tab
    fireEvent.click(element2)
    const element21 = screen.getAllByText('Who is my electricity supplier?')
    const element22 = screen.getAllByText(
      'What is my Meter Point Administration Number (MPAN)?'
    )
    expect(element21[0]).toBeInTheDocument()
    expect(element22[0]).toBeInTheDocument()

    //Open SubLink
    fireEvent.click(element21[0])
    const element211 = screen.getByText('Find your supplier')
    expect(element211).toBeInTheDocument()

    //Back buttons
    const elementBack = screen.getAllByText('Back')
    fireEvent.click(elementBack[0])
  })
})
