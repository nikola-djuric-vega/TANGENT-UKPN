import PowerCutCheckModal from '_molecules/PowerCutCheckModal/PowerCutCheckModal'
import { PowerCutChecks as PowerCutChecksType } from '_types/CMS/pages'
import Button from '_atoms/Button&Link/Button/Button'
import { useFormItems } from '_context/form-items'
import styles from './PowerCutChecks.module.scss'
import { AnimatePresence } from 'framer-motion'
import { ButtonAppearance } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import { useState } from 'react'
import Image from 'next/image'

const PowerCutChecks = ({
  overlayRightTitle,
  overlayLeftTitle,
  smartMeterImage,
  rightHeading,
  leftHeading,
  rightImage,
  rightSteps,
  leftImage,
  leftSteps,
  rightCTA,
  leftCTA,
  title,
}: PowerCutChecksType) => {
  const [checkOverlay, setCheckOverlay] = useState<number | null>(null)
  const { isSmart } = useFormItems()

  const dataFormated = [
    {
      overlayTitle: overlayLeftTitle,
      image: leftImage,
      title: leftHeading,
      steps: leftSteps,
      cta: leftCTA,
    },
    {
      overlayTitle: overlayRightTitle,
      image: isSmart ? smartMeterImage : rightImage,
      title: rightHeading,
      steps: rightSteps,
      cta: rightCTA,
    },
  ]

  return (
    <div className={styles.meterType}>
      <Heading level={5} className={styles.meterTypeHeading}>
        {title}
      </Heading>
      {dataFormated.map((col, i) => (
        <div className={styles.meterTypeColumns} key={i}>
          <Heading level={3} className={styles.meterTypeSubHeading}>
            {col.title}
          </Heading>
          <div className={styles.imageWraper}>
            {col.image && (
              <Image
                height={col.image.umbracoHeight}
                width={col.image.umbracoWidth}
                title={col.image.name}
                alt={col.image.name}
                layout="responsive"
                src={col.image.url}
              />
            )}
          </div>
          <Button
            appearance={ButtonAppearance.BLANK}
            className={styles.meterTypeButtons}
            onClick={() => setCheckOverlay(i)}
            type="button"
          >
            {col.cta}
            <Icon name={IconNames.CTA_ARROW_LONG} size="xs" />
          </Button>
        </div>
      ))}
      <AnimatePresence exitBeforeEnter>
        {(!!checkOverlay || checkOverlay === 0) && (
          <PowerCutCheckModal
            title={dataFormated[checkOverlay].title}
            steps={dataFormated[checkOverlay].steps}
            setIsModalOn={setCheckOverlay}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default PowerCutChecks
