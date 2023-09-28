import { StormChecklistType } from '_types/CMS/pages'
import { IconNames } from '_types/local'
import { LinkType } from '_types/CMS'

export const StormChecklistMockData: StormChecklistType = {
  stormChecklistTitle: 'Storm checklist',
  stormChecklistSubtitle:
    'Here are a few tips on how best to prepare for this upcoming storm',
  stormChecklistLinks: [
    {
      linkIcon: IconNames.ICON_HOME,
      linkURL: {
        type: LinkType.EXTERNAL,
        name: 'Home checklist',
        url: '/',
        target: '_blank',
      },
    },
    {
      linkIcon: IconNames.FORTY_PX_WEATHER,
      linkURL: {
        type: LinkType.EXTERNAL,
        name: 'After a storm checklist',
        url: '/',
        target: '_blank',
      },
    },
    {
      linkIcon: IconNames.ICON_HOUSE_LIGHT,
      linkURL: {
        type: LinkType.EXTERNAL,
        name: 'Buisness checklist',
        url: '/',
        target: '_blank',
      },
    },
  ],
}
