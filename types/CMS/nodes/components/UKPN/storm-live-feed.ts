import { ComponentsTypeName, AuthorType, Link, Media } from '_types/CMS'

export interface StormLiveFeedType {
  __typename: ComponentsTypeName.STORM_LIVE_FEED
  storm?: Storm
}

export interface Storm {
  stormSummary?: StormSummaryType[]
  hideStormSummary?: boolean
  descendants: {
    items: Post[]
  }
  stormName?: string
  pinnedPost?: Post
}

export interface StormSummaryType {
  summaryData?: RegionSummary[]
  description?: string
  title?: string
}

export interface RegionSummary {
  region?: Region
  countyData?: CountySummary[]
}

export interface CountySummary {
  customersAffected?: string
  county?: County
}

export interface County {
  name: string
}

export interface Region {
  name: string
}

export type Post = MediaPostType | StakeHolderPostType

export enum PostType {
  STAKE_HOLDER_POST = 'StakeholderPost',
  MEDIA_POST = 'MediaPost',
}

export interface PostBase extends React.HTMLAttributes<HTMLElement> {
  publishDate: string
  author?: AuthorType
  summary?: string
  id: string
}

export interface MediaPostType extends PostBase {
  __typename: PostType.MEDIA_POST
  isVideo?: boolean
  title?: string
  image?: Media
  link?: Link
}

export interface StakeHolderPostType extends PostBase {
  __typename: PostType.STAKE_HOLDER_POST
  readMoreText?: string
}
