import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import { ButtonColors, LinkAppearance } from '_types/CMS'
import styles from './TextBoxWithCTA.module.scss'
import Link from '_atoms/Button&Link/Link/Link'
import RichText from '_atoms/RichText/RichText'
import Heading from '_atoms/Heading/Heading'
import Icon from '_atoms/Icon/Icon'
import {
  BackgroundColours,
  TextBoxWithCTAType,
} from '_types/CMS/nodes/components/UKPN'

const TextBoxWithCTA = ({
  leftTitle,
  leftText,
  leftButtonLink,
  leftIcon,
  leftBackgroundColour,
  rightTitle,
  rightText,
  rightIcon,
  rightButtonLink,
  rightBackgroundColour,
  removeBottomMargin,
}: TextBoxWithCTAType) => {
  return (
    <ComponentLayout removeBottomMargin={removeBottomMargin}>
      <ul className={styles.textBoxWithCTA}>
        <li
          className={styles.ctaItem}
          data-bg-colour={leftBackgroundColour}
          data-testid="leftItem"
        >
          {!!leftIcon && (
            <div className={styles.iconWrapper}>
              <Icon
                baseColour={leftBackgroundColour === BackgroundColours.DEFAULT}
                name={leftIcon}
              />
            </div>
          )}
          {!!leftTitle && (
            <Heading
              level={4}
              className={styles.title}
              data-has-text={!!leftText}
            >
              {leftTitle}
            </Heading>
          )}
          {!!leftText && <RichText className={styles.text} text={leftText} />}
          {!!leftButtonLink?.url && leftButtonLink?.name && (
            <Link
              className={styles.link}
              appearance={LinkAppearance.PRIMARY}
              color={
                leftBackgroundColour === BackgroundColours.DEFAULT
                  ? ButtonColors.LIGHT
                  : ButtonColors.WHITE
              }
              url={leftButtonLink.url}
              target={leftButtonLink.target}
            >
              {leftButtonLink.name}
            </Link>
          )}
        </li>
        <li className={styles.ctaItem} data-bg-colour={rightBackgroundColour}>
          {!!rightIcon && (
            <div className={styles.iconWrapper}>
              <Icon
                baseColour={rightBackgroundColour === BackgroundColours.DEFAULT}
                name={rightIcon}
              />
            </div>
          )}
          {!!rightTitle && (
            <Heading
              level={4}
              className={styles.title}
              data-has-text={!!rightText}
            >
              {rightTitle}
            </Heading>
          )}
          {!!rightText && <RichText className={styles.text} text={rightText} />}
          {!!rightButtonLink?.url && !!rightButtonLink?.name && (
            <Link
              className={styles.link}
              appearance={LinkAppearance.PRIMARY}
              color={
                rightBackgroundColour === BackgroundColours.DEFAULT
                  ? ButtonColors.LIGHT
                  : ButtonColors.WHITE
              }
              url={rightButtonLink.url}
              target={rightButtonLink.target}
            >
              {rightButtonLink.name}
            </Link>
          )}
        </li>
      </ul>
    </ComponentLayout>
  )
}

export default TextBoxWithCTA
