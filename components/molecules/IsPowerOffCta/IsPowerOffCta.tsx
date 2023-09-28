import { IsPowerOffCTAType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import Button from '_atoms/Button&Link/Button/Button'
import { transformUrl } from '_utils/transform-url'
import styles from './IsPowerOffCta.module.scss'
import { usePowerCut } from '_context/power-cut'
import RichText from '_atoms/RichText/RichText'
import { ButtonAppearance } from '_types/CMS'
import Heading from '_atoms/Heading/Heading'
import { useRouter } from 'next/router'
import Icon from '_atoms/Icon/Icon'
import { useEffect } from 'react'

const IsPowerOffCta = ({ icon, title, body, link }: IsPowerOffCTAType) => {
  const { powerCutState, fetchRpcToggle } = usePowerCut()
  const router = useRouter()

  useEffect(() => {
    fetchRpcToggle()
  }, [])

  if (!powerCutState.disableRPCButton) {
    return (
      <ComponentLayout containerClass={styles.isPowerOffCta}>
        <div className={styles.ctaItem}>
          {icon && <Icon name={icon} />}
          {title && (
            <Heading level={2} className={styles.title}>
              {title}
            </Heading>
          )}
          {body && <RichText className={styles.body} text={body} />}
          {!!link && (
            <Button
              onClick={() => router.push(transformUrl(link.url))}
              appearance={ButtonAppearance.SECONDARY}
              className={styles.link}
              type="button"
            >
              {link.name}
            </Button>
          )}
        </div>
      </ComponentLayout>
    )
  } else {
    return null
  }
}

export default IsPowerOffCta
