import styles from './PowerCutCheckModal.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import { PowerCutStep } from '_types/CMS/pages'
import { ButtonAppearance } from '_types/CMS'
import { useEffect, useState } from 'react'
import { IconNames } from '_types/local'
import { motion } from 'framer-motion'
import Icon from '_atoms/Icon/Icon'
import { debounce } from 'lodash'
import Image from 'next/image'
import React from 'react'

//SLIDER
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'

export interface PowerCutCheckModal {
  setIsModalOn: React.Dispatch<React.SetStateAction<number | null>>
  steps: PowerCutStep[]
  title: string
}

const PowerCutCheckModal = ({
  setIsModalOn,
  title,
  steps,
}: PowerCutCheckModal) => {
  const toggleModalHandler = () => {
    setIsModalOn(null)
  }

  // Check if the device is mobile
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    document?.body?.setAttribute('style', 'overflow: hidden')
    const updateMobile = debounce(
      () => setIsMobile(window.innerWidth < 768 ? true : false),
      150
    )
    updateMobile()
    window.addEventListener('resize', updateMobile, { passive: true })
    return () => {
      document?.body?.setAttribute('style', 'overflow: auto')
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  // Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
  }
  let isSlider = false

  const anim = {
    start: {
      opacity: 0,
      y: '-25%',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    finish: {
      opacity: 1,
      y: '0%',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.section
      className={styles.modal}
      variants={anim}
      initial="start"
      animate="finish"
      exit="start"
    >
      {isMobile && (
        <div className={styles.topContainerMobileFixed}>
          <Button
            appearance={ButtonAppearance.BLANK}
            className={styles.closeButtonMobileFixed}
            onClick={toggleModalHandler}
            type="button"
          >
            <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
          </Button>
        </div>
      )}
      <div className={styles.hero}>
        {!isMobile && (
          <Button
            appearance={ButtonAppearance.BLANK}
            className={styles.closeButton}
            onClick={toggleModalHandler}
            type="button"
          >
            <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
          </Button>
        )}
        <div className={styles.heroInner}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <div className={styles.subtitle}></div>
        </div>
      </div>
      <div className={styles.containerWrapper}>
        {steps?.map((item: any, i: any) => {
          if (item?.images?.length > 1) {
            isSlider = true
          }
          return (
            <div className={styles.stepByStep} key={i}>
              <div className={styles.stepContainer}>
                <div className={styles.stepContainerTitle}>
                  <div className={styles.stepContainerSubTitle}>
                    {item?.title}
                  </div>
                  <div className={styles.stepContainerDescription}>
                    {item?.text}
                  </div>
                </div>
                <div className={styles.circleSecond}>
                  <div className={styles.circleFirst}>
                    <div className={styles.stepContainerCircle}>
                      <span>{i + 1}</span>
                    </div>
                  </div>
                </div>
                {item?.images?.length > 1 ? (
                  <div
                    className={`${styles.stepContainerImage} ${
                      styles.stepContainerImageSlider
                    } ${isSlider ? styles.isModalActive : ''}`}
                  >
                    <Slider {...settings}>
                      {item?.images?.map((img: any, i: any) => (
                        <Image
                          title={img.name}
                          alt={img.name}
                          src={img.url}
                          width={330}
                          height={240}
                          key={i}
                        />
                      ))}
                    </Slider>
                  </div>
                ) : (
                  <div className={styles.stepContainerImage}>
                    <Image
                      src={item?.images[0]?.url}
                      width={330}
                      height={240}
                    />
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      {!isMobile && (
        <div className={styles.bottomContainer}>
          <Button
            appearance={ButtonAppearance.BLANK}
            className={styles.closeButtonSecond}
            onClick={toggleModalHandler}
            type="button"
          >
            <Icon name={IconNames.ICO_CLOSE} size="xxs" /> Close
          </Button>
        </div>
      )}
    </motion.section>
  )
}

export default PowerCutCheckModal
