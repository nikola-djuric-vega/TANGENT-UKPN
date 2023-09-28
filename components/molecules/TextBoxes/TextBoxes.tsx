import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { TextBoxesType } from '_types/CMS/nodes/components/UKPN'
import { ButtonColors, LinkAppearance } from '_types/CMS'
import Link from '_atoms/Button&Link/Link/Link'
import Heading from '_atoms/Heading/Heading'
import styles from './TextBoxes.module.scss'
import React from 'react'

const TextBoxes = ({ textBoxes, removeBottomMargin }: TextBoxesType) => {
  return (
    <ComponentLayout removeBottomMargin={removeBottomMargin}>
      <div className={styles.textBoxesContainer}>
        {textBoxes?.map(({ title, text, textBoxCTA }, index) => {
          return (
            <div className={styles.textBox} key={index}>
              {!!title && (
                <Heading className={styles.title} level={4}>
                  {title}
                </Heading>
              )}
              {!!text && <p className={styles.text}>{text}</p>}
              {!!textBoxCTA?.url && !!textBoxCTA?.name && (
                <Link
                  appearance={LinkAppearance.PRIMARY}
                  color={ButtonColors.DARK}
                  className={styles.link}
                  url={textBoxCTA.url}
                >
                  {textBoxCTA.name}
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </ComponentLayout>
  )
}

export default TextBoxes
