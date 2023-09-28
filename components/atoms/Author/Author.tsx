import { trimName } from '_utils/trim-name'
import styles from './Author.module.scss'
import { AuthorType } from '_types/CMS'
import Image from 'next/image'

export enum AuthorLayout {
  ROW = 'row',
  COLUMN = 'column',
}

export enum AuthorTheme {
  WHITE = 'white',
  GREY = 'grey',
}
export interface AuthorProps extends AuthorType {
  trim?: boolean
  layout?: AuthorLayout
  theme?: AuthorTheme
}

const Author = ({
  image,
  authorName,
  department,
  trim,
  theme,
  layout,
}: AuthorProps) => {
  return (
    <div
      className={styles.author}
      data-layout={layout}
      data-is-trim={trim}
      data-theme={theme}
      tabIndex={1}
    >
      {image && (
        <div className={styles.authorImage}>
          <Image
            layout="responsive"
            title={image.name}
            alt={image.name}
            src={image.url}
            height={40}
            width={40}
          />
        </div>
      )}
      {(authorName || department) && (
        <div className={styles.authorText}>
          {authorName && <p className={styles.authorName}>{authorName}</p>}

          {department && (
            <>
              <span className={styles.divider} />
              <p className={styles.department}>{department}</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Author
