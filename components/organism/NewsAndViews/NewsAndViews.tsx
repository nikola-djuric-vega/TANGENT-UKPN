import NewsAndViewsArticle from '_molecules/NewsAndViewsArticle/NewsAndViewsArticle'
import { NewsAndViews as NewsAndViewsType } from '_types/CMS/nodes/components/UKPN'
import { ButtonAppearance, ButtonColors, ButtonLayout } from '_types/CMS'
import { NewsArticleAPI } from '_types/CMS/pages/main-site-pages'
import { useArticleItems } from '_context/articles-items'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './NewsAndViews.module.scss'
import { IconNames } from '_types/local'
import { useState } from 'react'
import axios from 'axios'

const NewsAndViews = ({ title, featuredArticle }: NewsAndViewsType) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [loadedArticles, setLoadedArticles] = useState<NewsArticleAPI[]>([])
  const [areInitialArticlesLoaded, setAreInitialArticlesLoaded] =
    useState(false)
  const { data, documentsCount, pageCount } = useArticleItems()
  const dataWithoutFeaturedArticle = data?.filter((item) => {
    return item.nodeId !== featuredArticle.id
  })

  const rightColumnArticles = dataWithoutFeaturedArticle?.slice(0, 3)

  const loadMoreArticles = async () => {
    let moreArticles

    if (areInitialArticlesLoaded) {
      moreArticles = await axios.get(
        `/api/fetch-articles?page=${currentPage + 1}`
      )

      if (moreArticles.data.length) {
        setLoadedArticles(loadedArticles.concat(moreArticles.data))
        setCurrentPage(currentPage + 1)
      }
    } else {
      const slicedArticles = dataWithoutFeaturedArticle?.slice(3, 20)
      setLoadedArticles(slicedArticles)
      setAreInitialArticlesLoaded(true)
    }
  }

  return (
    <div className={styles.newsAndViews}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {!!featuredArticle?.image && featuredArticle?.pageTitle && (
          <div className={styles.featuredArticle}>
            <NewsAndViewsArticle
              videoUrl={featuredArticle.video}
              imageUrl={featuredArticle.image.url}
              imageW={featuredArticle.image.umbracoWidth}
              imageH={featuredArticle.image.umbracoHeight}
              pageTitle={featuredArticle.pageTitle}
              path={featuredArticle.url}
              publishedDate={featuredArticle.publishedDate}
              subheading={featuredArticle.subhead}
              nodeId={featuredArticle.id}
              isFeatured
            />
          </div>
        )}
        <div className={styles.rightColumn}>
          {rightColumnArticles?.map((article, i) => (
            <NewsAndViewsArticle {...article} key={i} isFeatured={false} />
          ))}
        </div>
        {!!data?.length && (
          <div className={styles.loadedArticles}>
            {loadedArticles.map((article, i) => (
              <NewsAndViewsArticle
                {...article}
                key={i}
                isFeatured={false}
                isLoadedArticles={true}
              />
            ))}
          </div>
        )}
        <div className={styles.loadMoreCTA}>
          <Button
            className={styles.loadMoreButton}
            appearance={ButtonAppearance.SECONDARY}
            disabled={pageCount === currentPage}
            icon={IconNames.DOWN_CHEVRON}
            onClick={loadMoreArticles}
            color={ButtonColors.DARK}
            layout={ButtonLayout.RTL}
          >
            Load more articles
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewsAndViews
