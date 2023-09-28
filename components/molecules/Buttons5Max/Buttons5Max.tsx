import { Buttons5MaxType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import CtaRender from '_hoc/CtaRender/CtaRender'
import styles from './Buttons5Max.module.scss'

const Buttons5Max = ({ buttons }: Buttons5MaxType) => {
  return (
    <ComponentLayout>
      <div className={styles.content}>
        {!!buttons?.length && (
          <>
            {buttons.map((button, index) => (
              <CtaRender
                className={styles.cta}
                cta={button}
                color={button.cTAType}
                key={index}
              />
            ))}
          </>
        )}
      </div>
    </ComponentLayout>
  )
}

export default Buttons5Max
