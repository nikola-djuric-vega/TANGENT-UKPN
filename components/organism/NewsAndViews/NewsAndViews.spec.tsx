import { NewsAndViews as NewsAndViewsType } from '_types/CMS/nodes/components/UKPN'
import { NewsArticleAPI } from '_types/CMS/pages/main-site-pages/news-article-page'
import { act, fireEvent, render } from '@testing-library/react'
import { ArticlesItemsContext } from '_context/articles-items'
import { ComponentsTypeName, PageTypeNames } from '_types/CMS'
import { ArticleItemsAPI } from '_types/local'
import NewsAndViews from './NewsAndViews'
import React from 'react'

const mockNewsAndViewsNewsArtApi: NewsArticleAPI[] = [
  {
    nodeId: 'MockArt1',
    pageTitle: 'Mock Volunteers sow seeds for Uckfield’s new community garden',
    subheading:
      'Plans to create a new community garden space in the heart of Uckfield are taking shape, helped by a team of electricity workers and colleagues from a local funeral directors.',
    publishedDate: '2022-02-09T00:00:00Z',
    videoUrl: 'https://www.youtube.com/watch?v=GPeUnB6kvSY',
    path: 'mock1.url',
  },
  {
    nodeId: 'MockArt2',
    pageTitle: 'Mock New vision includes £20 million Foundation fund',
    subheading:
      'A New vision about 20 million pounds is to fund the Foundation',
    publishedDate: '2022-02-09T00:00:00Z',
    videoUrl: 'https://www.youtube.com/watch?v=GPeUnB6kvSY',
    path: 'mock1.url',
  },
  {
    nodeId: 'MockArt3',
    pageTitle: 'Mock Something About Solar Panels',
    subheading:
      'A New vision about 20 million pounds is to fund the Foundation',
    publishedDate: '2022-02-09T00:00:00Z',
    videoUrl: 'https://www.youtube.com/watch?v=GPeUnB6kvSY',
    path: 'mock1.url',
  },
  {
    nodeId: 'MockArt4',
    pageTitle: 'Mock Something about other news',
    subheading:
      'A New vision about 20 million pounds is to fund the Foundation',
    publishedDate: '2022-02-09T00:00:00Z',
    videoUrl: 'https://www.youtube.com/watch?v=GPeUnB6kvSY',
    path: 'mock1.url',
  },
]

const mockProps: NewsAndViewsType = {
  __typename: ComponentsTypeName.NEWS_AND_VIEWS,
  featuredArticle: {
    ancestors: {
      items: [],
    },
    name: 'Mock Volunteers sow seeds for Uckfield’s new community garden',
    pageTitle: 'Mock Volunteers sow seeds for Uckfield’s new community garden',
    subhead:
      'Plans to create a new community garden space in the heart of Uckfield are taking shape, helped by a team of electricity workers and colleagues from a local funeral directors.',
    __typename: PageTypeNames.NEWS_ARTICLE,
    publishedDate: '2022-02-09T00:00:00Z',
    desktopImage: {
      url: 'https://media.umbraco.io/dev-uk-power-networks/dcpmhmsm/solar-panels-at-home-1.jpg',
      name: 'Solar Panels At Home (1)',
      umbracoWidth: '1386',
      umbracoHeight: '936',
    },
    tabletImage: {
      url: 'https://media.umbraco.io/dev-uk-power-networks/dcpmhmsm/solar-panels-at-home-1.jpg',
      name: 'Solar Panels At Home (1)',
      umbracoWidth: '1386',
      umbracoHeight: '936',
    },
    mobileImage: {
      url: 'https://media.umbraco.io/dev-uk-power-networks/dcpmhmsm/solar-panels-at-home-1.jpg',
      name: 'Solar Panels At Home (1)',
      umbracoWidth: '1386',
      umbracoHeight: '936',
    },
    image: {
      url: 'https://media.umbraco.io/dev-uk-power-networks/dcpmhmsm/solar-panels-at-home-1.jpg',
      name: 'Solar Panels At Home (1)',
      umbracoWidth: '1386',
      umbracoHeight: '936',
    },
    video: 'https://www.youtube.com/watch?v=GPeUnB6kvSY',
    contentTypeAlias: '',
    pageSubtitle: '',
    url: '/',
    id: 'MockArt1',
  },
  title: 'Mock News and Views Title',
}

const mockArticleItemsAPI: ArticleItemsAPI = {
  data: mockNewsAndViewsNewsArtApi,
  documentsCount: 4,
  pageCount: 4,
}

describe('News and Views', () => {
  it('Render News and Views No Initial Articles Loaded', async () => {
    const screen = render(<NewsAndViews {...mockProps} />)

    //Test regular rendering
    const element1 = screen.getByText('Mock News and Views Title')
    const element2 = screen.getByText(
      'Mock Volunteers sow seeds for Uckfield’s new community garden'
    )

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()

    //Test clicks
    const element3 = screen.getByText('Load more articles')
    fireEvent.click(element3)
  })

  it('Render News and Views Initial Articles Loaded', async () => {
    const screen = render(
      <ArticlesItemsContext.Provider value={mockArticleItemsAPI}>
        <NewsAndViews {...mockProps} />
      </ArticlesItemsContext.Provider>
    )

    const element1 = screen.getByText('Mock News and Views Title')
    const element2 = screen.getByText(
      'Mock Volunteers sow seeds for Uckfield’s new community garden'
    )
    const element3 = screen.getByText('Load more articles')

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()

    await act(async () => {
      fireEvent.click(element3)
    })
  })
})
