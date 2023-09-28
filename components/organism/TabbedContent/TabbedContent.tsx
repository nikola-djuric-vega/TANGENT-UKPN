import LightBoxVideoPlayer from '_molecules/LighboxVideoPlayer/LightboxVideoPlayer'
import TabbedContentItem from '_molecules/TabbedContentItem/TabbedContentItem'
import { TabbedContentType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import React, { useEffect, useState } from 'react'
import styles from './TabbedContent.module.scss'
import Heading from '_atoms/Heading/Heading'

const TabbedContent = ({
  tabbedContentItems,
  removeBottomMargin,
  moduleTitle,
}: TabbedContentType) => {
  const [activeItem, setActiveItem] = useState<number | undefined>(0)
  const [isModalOpen, setIsModalOpen] = useState('')

  useEffect(() => {
    if (!isModalOpen) {
      document.body.classList.remove('modal-open')
    }
  }, [isModalOpen])

  return (
    <ComponentLayout
      removeBottomMargin={removeBottomMargin}
      innerClass={styles.tabbedContent}
    >
      {isModalOpen && (
        <LightBoxVideoPlayer url={isModalOpen} setState={setIsModalOpen} />
      )}
      {!!moduleTitle && (
        <Heading className={styles.moduleTitle} level={2}>
          {moduleTitle}
        </Heading>
      )}
      {!!tabbedContentItems && (
        <div className={styles.content}>
          {tabbedContentItems?.map((item, index) => (
            <TabbedContentItem
              setIsModalOpen={setIsModalOpen}
              setActiveItem={setActiveItem}
              tabbedContentItem={item}
              activeItem={activeItem}
              index={index}
              key={index}
            />
          ))}
        </div>
      )}
    </ComponentLayout>
  )
}

export default TabbedContent
