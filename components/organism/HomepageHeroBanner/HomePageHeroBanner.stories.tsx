import { ComponentsTypeName, LinkType } from '_types/CMS'
import HomePageHeroBanner from './HomePageHeroBanner'
import { Story, Meta } from '@storybook/react'
import { IconNames } from '_types/local'
import React from 'react'
import {
  HomePageHeroBannerType,
  HomePageHeroSlideType,
} from '_types/CMS/nodes/components/UKPN'

export default {
  title: 'organisms/HomePageHeroBanner',
  component: HomePageHeroBanner,
} as Meta

const Template: Story<HomePageHeroBannerType> = (args) => (
  <HomePageHeroBanner {...args} />
)

export const Default = Template.bind({})
export const HomePageHeroBannerData: HomePageHeroBannerType = {
  __typename: ComponentsTypeName.HOME_PAGE_HERO_BANNER,
  slides: [
    {
      __typename: HomePageHeroSlideType.IMAGE,
      title: 'UK Power Networks 3',
      navigationTitle: 'What we do',
      icon: IconNames.EIGHTY_PX_CONNECTIONS,
      lighting: 'light',
      text: 'We own and maintain electricity cables and lines across London, the South East and East of England. Customers don’t pay their electricity bills to us.',
      link: {
        name: 'Read our Business Plan',
        type: LinkType.EXTERNAL,
        url: '/',
      },
      desktopImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/oa2hgk31/home-banner-parallax-ukpn-desktop.jpg',
        umbracoWidth: '1600',
        umbracoHeight: '900',
      },
      tabletImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/l0ufngzw/poppy-graphic-website-desktop-v2-3.png',
        umbracoHeight: '300',
        umbracoWidth: '300',
      },
      mobileImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/ourgq4xz/poppy-graphic-website-desktop-v2-2.png',
        umbracoHeight: '300',
        umbracoWidth: '300',
      },
    },
    {
      __typename: HomePageHeroSlideType.PARALLAX,
      title: 'Power cut?',
      navigationTitle: 'Power cut',
      icon: IconNames.EIGHTY_PX_CONNECTIONS,
      lighting: 'light',
      text: 'Find out when the power will be back on, register for text messages or track your power cut.',
      link: {
        name: 'Search for a powwer cut',
        type: LinkType.EXTERNAL,
        url: '/',
      },
      backgroudDesktopImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/1jhhptsy/home-banner_parallax_bg_desktop.png',
      },
      backgroudTabletImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/vzbi0onb/home-banner_parallax_bg_tablet.png',
      },
      backgroundMobileImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/zdebywnp/home-banner_parallax_bg_mobile.png',
      },
      foregroundDesktopImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/fveneyi1/home-banner_parallax_psr_desktop.png',
      },
      foregroundTabletImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/5mmjl2op/home-banner_parallax_psr_tablet.png',
      },
      foregroundMobileImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/nlwd2um2/home-banner_parallax_psr_mobile.png',
      },
      iconDesktopImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/vnkb4z2i/home-banner_parallax_psr_icon_desktop.png',
      },
      iconTabletImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/viybwxp5/home-banner_parallax_psr_icon_tablet.png',
      },
      iconMobileImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/gazk2fs5/home-banner_parallax_psr_icon_mobile.png',
      },
    },
    {
      __typename: HomePageHeroSlideType.IMAGE,
      title: 'Need extra support during a power cut?',
      navigationTitle: 'Need extra support',
      lighting: 'light',
      icon: IconNames.EIGHTY_PX_CONNECTIONS,
      text: 'We can offer free support to those who need it.',
      link: {
        name: 'Sign up',
        type: LinkType.EXTERNAL,
        url: '/',
      },
      desktopImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/oa2hgk31/home-banner-parallax-ukpn-desktop.jpg',
      },
      tabletImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/l0ufngzw/poppy-graphic-website-desktop-v2-3.png',
        umbracoHeight: '300',
        umbracoWidth: '300',
      },
      mobileImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/ourgq4xz/poppy-graphic-website-desktop-v2-2.png',
        umbracoHeight: '300',
        umbracoWidth: '300',
      },
    },
    {
      __typename: HomePageHeroSlideType.IMAGE,
      title: 'Do you live in UK Power Networks area?',
      navigationTitle: 'Check your area',
      lighting: 'light',
      icon: IconNames.EIGHTY_PX_CONNECTIONS,
      text: 'We cover London, the South East and East of England.',
      link: {
        name: 'Search postcode',
        type: LinkType.EXTERNAL,
        url: '/',
      },
      desktopImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/oa2hgk31/home-banner-parallax-ukpn-desktop.jpg',
      },
      tabletImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/l0ufngzw/poppy-graphic-website-desktop-v2-3.png',
        umbracoHeight: '300',
        umbracoWidth: '300',
      },
      mobileImage: {
        name: '',
        url: 'https://media.umbraco.io/dev-uk-power-networks/ourgq4xz/poppy-graphic-website-desktop-v2-2.png',
        umbracoHeight: '300',
        umbracoWidth: '300',
      },
    },
  ],
}

Default.args = HomePageHeroBannerData
