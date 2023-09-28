import { LinkType } from '_types/CMS/link'
import { IconNames } from '_types/local/icons'

const mockQuickLinkCard = {
  enable4ColumnLayout: false,
  quickCardLinks: [
    {
      linkIcon: IconNames.ICON_HOME,
      linkURL: {
        name: 'Checklist item',
        type: LinkType.CONTENT,
        url: '/one',
      },
    },
    {
      linkIcon: IconNames.ICON_TREE_BUSH_POWERLINE,
      linkURL: {
        name: 'Checklist item with an example of longer text length',
        type: LinkType.CONTENT,
        url: '/two',
      },
    },
    {
      linkIcon: IconNames.ICON_APPLY,
      linkURL: {
        name: 'Checklist item',
        type: LinkType.CONTENT,
        url: '/three',
      },
    },
    {
      linkIcon: IconNames.ICON_BATTERY,
      linkURL: {
        name: 'Checklist item without an icon',
        type: LinkType.CONTENT,
        url: '/four',
      },
    },
    {
      linkIcon: IconNames.ICON_HOME,
      linkURL: {
        name: 'Checklist item',
        type: LinkType.CONTENT,
        url: '/one',
      },
    },
    {
      linkIcon: IconNames.ICON_TREE_BUSH_POWERLINE,
      linkURL: {
        name: 'Checklist item with an example of longer text length',
        type: LinkType.CONTENT,
        url: '/two',
      },
    },
  ],
}

export default mockQuickLinkCard
