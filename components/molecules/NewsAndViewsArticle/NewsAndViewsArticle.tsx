import LightBoxVideoPlayer from '_molecules/LighboxVideoPlayer/LightboxVideoPlayer'
import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import { NewsArticleAPI } from '_types/CMS/pages/main-site-pages'
import styles from './NewsAndViewsArticle.module.scss'
import { LinkAppearance, TextSizes } from '_types/CMS'
import React, { useState, useEffect } from 'react'
import RichText from '_atoms/RichText/RichText'
import Link from '_atoms/Button&Link/Link/Link'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import { DateTime } from 'luxon'
import Image from 'next/image'
export interface NewsAndViewsArticleProps extends NewsArticleAPI {
  isFeatured?: boolean
  imageW?: string
  imageH?: string
  isLoadedArticles?: boolean
}

const NewsAndViewsArticle = ({
  imageUrl,
  pageTitle,
  path,
  publishedDate,
  subheading,
  videoUrl,
  isFeatured = false,
  imageW,
  imageH,
  isLoadedArticles,
}: NewsAndViewsArticleProps) => {
  const [isModalOpen, setIsModalOpen] = useState('')

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isModalOpen])

  useEffect(() => {
    if (!isModalOpen) {
      document.body.classList.remove('modal-open')
    }
  }, [isModalOpen])

  return (
    <article
      className={styles.article}
      data-is-loaded-article={isLoadedArticles}
    >
      {isModalOpen && (
        <LightBoxVideoPlayer url={videoUrl} setState={setIsModalOpen} />
      )}
      <div className={styles.articleContent}>
        {!!imageUrl && isFeatured && (
          <ConditionalWrapper
            condition={!!videoUrl}
            wrapper={(children) => (
              <button
                className={styles.videoWrapperButton}
                onClick={() => {
                  document.body.classList.add('modal-open')
                  setIsModalOpen(videoUrl)
                }}
              >
                {children}
                <div className={styles.youtubeIcon}>
                  <Icon name={IconNames.YOUTUBE} />
                </div>
              </button>
            )}
          >
            <div className={styles.articleImageWrapper}>
              <Image
                title={pageTitle || ''}
                alt={pageTitle || ''}
                width={imageW}
                height={imageH}
                layout="responsive"
                src={imageUrl}
              />
            </div>
          </ConditionalWrapper>
        )}
        {!!path && pageTitle && (
          <h2 className={styles.articleHeading}>
            <Link
              className={styles.articleLink}
              appearance={LinkAppearance.BLANK}
              url={path}
            >
              {pageTitle}
            </Link>
          </h2>
        )}
        {subheading && (
          <RichText
            text={subheading}
            size={TextSizes.TEXT_BODY_3}
            className={styles.subhead}
          />
        )}
      </div>
      {publishedDate && (
        <div className={styles.articleDate}>
          <Icon name={IconNames.ICO_CALENDAR} size="xs" />
          {DateTime.fromISO(publishedDate).toFormat('MMM dd yyyy')}
        </div>
      )}
    </article>
  )
}

export default NewsAndViewsArticle
