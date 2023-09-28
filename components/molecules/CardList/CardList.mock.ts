import { LinkType } from '_types/CMS/link'
import { IconNames } from '_types/local/icons'

const mockCardList = {
  items: [
    {
      linkIcon: IconNames.ICON_HOME,
      linkURL: {
        name: 'Checklist item',
        type: LinkType.CONTENT,
        url: '/',
      },
    },
    {
      linkIcon: IconNames.ICON_TREE_BUSH_POWERLINE,
      linkURL: {
        name: 'Checklist item with an example of longer text length',
        type: LinkType.CONTENT,
        url: '/',
      },
    },
    {
      linkIcon: IconNames.ICON_APPLY,
    },
    {
      linkURL: {
        name: 'Checklist item with an example of longer text length',
        type: LinkType.CONTENT,
        url: '/',
      },
    },
  ],
}

export default mockCardList
