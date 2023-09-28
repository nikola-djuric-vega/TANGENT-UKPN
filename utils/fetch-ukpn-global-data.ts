import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { link, mediaFragment } from './components'
import { getValidData } from './get-valid-data'
import merge from 'lodash/merge'

import {
  GlobalChildrenItemsObject,
  GlobalChildrenItemsArray,
  GlobalChildrenItemsName,
  UkpnGlobalDataQuery,
  DnosEntity,
} from '_types/CMS/nodes'
interface FetchUkpnGlobalDataArgs {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale: string
}

export const fetchUkpnGlobalData = async ({
  apolloClient,
  preview = false,
  locale,
}: FetchUkpnGlobalDataArgs) => {
  const mainNavigationQuery = gql`
    query {
      allUkpnSiteSettings(culture: "${locale}", preview: ${preview}) {
        items {
          children {
            items {
              ... on MainNavigation {
                __typename
                children {
                  items {
                    ... on NavigationItem {
                      name
                      navigationMenu {
                        ... on NavigationMenu {
                          title
                          navigationLinks {
                            ${link}
                          }
                        }
                      }
                      promoBoxes {
                        ... on PromoBox {
                          promoBoxType
                          title
                          largeText
                          body
                          cTA {
                            ... on Link {
                              ${link}
                            }
                          }
                        }
                      }
                      showInStormMode
                    }
                  }
                }
              }
            }
          }  
        }
      }
    }
  `

  const miscQuery = gql`
    query {
      allPowerSharing(culture: "en", preview: false) {
        items {
          powerSharingEnabled
          powerSharingPopUpIcon
          powerSharingPopUpTitle
          powerSharingPopUpMessage
          powerSharingPopUpButtons {
            ... on PrimaryButton {
              uRL {
                name
                url
              }
              cTAType
            }
            ... on SecondaryButton {
              uRL {
                name
                url
              }
              cTAType
            }
          }
        }
      }
      allUkpnSiteSettings(culture: "${locale}", preview: ${preview}) {
        items {
          click4AssistanceId
          enableNewWebChat
          reportPowerCutLink {
            url
          }
          desktopLogo {
            ${mediaFragment}
          }
          mobileLogo {
            ${mediaFragment}
          }
          stormModeLogo {
            ${mediaFragment}
          }
          children {
            items {
              ... on RightHandMenuNavigation {
                menuLinks {
                  ${link}
                }
              }

              ... on DNOs {
                name
                children {
                  items {
                    ... on DnoEntity {
                      name
                      dnoPhoneNumber
                      dnoLogo{
                        ${mediaFragment}
                      }
                      websiteURL
                    }
                  }
                }

              }
              ... on GlobalHeader {
                secondaryNavigationLinks {
                  ... on Link {
                    ${link}
                  }
                }
              }
    
              ... on GlobalFooter {
                footerLogo {
                  url
                  name
                }

                socialMediaItems {
                  ... on SocialMediaItem {
                    url
                    icon
                  }
                }

                generalLinks {
                  ... on Link {
                    ${link}
                  }
                }

                serviceLinks {
                  ... on Link {
                    ${link}
                  }
                }

                informationLinks {
                  ... on Link {
                    ${link}
                  }
                }

                languageSelector {
                  ... on LanguageSelectorItem {
                    label
                    link {
                      ... on Link {
                        ${link}
                      }
                    }
                  }
                }

              }
            }
          }  
        }
      }
    }
  `

  const { data: navData } = await apolloClient.query<UkpnGlobalDataQuery>({
    query: mainNavigationQuery,
  })

  const { data: miscData } = await apolloClient.query<UkpnGlobalDataQuery>({
    query: miscQuery,
  })

  const allUkpnSiteSettingsItems = merge(
    navData.allUkpnSiteSettings.items[0],
    miscData.allUkpnSiteSettings.items[0]
  )

  // The below merge of data is needed as a workoud to a bug on Umbraco's
  // GraphQL endpoint, in which the MainNavigation returns null items
  // if it's part of a bigger query, e.g. included within miscQuery (above)
  const data = {
    ...miscData,
    allUkpnSiteSettings: {
      items: [allUkpnSiteSettingsItems],
    },
  }

  const validData: UkpnGlobalDataQuery = getValidData(data)

  const childrenTypes = [
    GlobalChildrenItemsName.HEADER,
    GlobalChildrenItemsName.FOOTER,
    GlobalChildrenItemsName.MAINNAVIGATION,
    GlobalChildrenItemsName.RIGHTHANDMENUNAVIGATION,
    GlobalChildrenItemsName.DNOs,
  ]

  const powerSharingData = validData?.allPowerSharing?.items?.[0]
  const siteSettings = validData?.allUkpnSiteSettings?.items?.[0]
  const { children, ...validSiteSettings } = siteSettings

  const formattedChildren = (
    siteSettings.children as GlobalChildrenItemsArray
  ).items
    .filter((item) => childrenTypes.includes(item.__typename))
    .reduce(
      (prevItem, item) => Object.assign(prevItem, { [item?.__typename]: item }),
      {}
    ) as GlobalChildrenItemsObject

  return {
    allSiteSettings: {
      ...validSiteSettings,
      ...formattedChildren,
      ...{ powerSharingData },
    },
  }
}
