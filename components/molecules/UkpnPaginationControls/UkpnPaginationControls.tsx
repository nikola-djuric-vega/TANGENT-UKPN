import { useDocumentsItems } from '_context/documents-items'
import styles from './UkpnPaginationControls.module.scss'
import Button from '_atoms/Button&Link/Button/Button'
import { ButtonAppearance } from '_types/CMS'
import { scrollTo } from '_utils/scroll-to'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'
import Icon from '_atoms/Icon/Icon'
import { IconNames } from '_types/local'

export interface UkpnPaginationControlsProps {
  pages: number
}

const UkpnPaginationControls = ({ pages }: UkpnPaginationControlsProps) => {
  const {
    query: { page, ...query },
    ...router
  } = useRouter()
  const currentPage = parseInt(page as string)
  const { setDocuments } = useDocumentsItems()

  const changePage = (page: number) => {
    setDocuments((prevState) => ({
      ...prevState,
      isLoading: true,
      documents: [],
    }))
    scrollTo('results')
    router.push(
      {
        pathname: router.asPath.split('?')[0],
        query: { ...query, page: page },
      },
      undefined,
      {
        scroll: false,
      }
    )
  }

  return (
    <div className={styles.PaginationControls}>
      <Button
        appearance={ButtonAppearance.SEARCH_PAGINATION}
        className={styles.prevButton}
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage - 1 === 0 && true}
        data-testid="previous"
      >
        <>{<Icon name={IconNames.ARROW_ICON} size="xs" />} Previous</>
      </Button>
      <ReactPaginate
        className={styles.ReactPaginate}
        previousClassName={styles.hideButtons}
        nextClassName={styles.hideButtons}
        pageClassName={styles.pageThumb}
        activeClassName={styles.activePage}
        breakClassName={styles.break}
        breakLabel="..."
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={(page) => changePage(page.selected + 1)}
        forcePage={currentPage - 1}
        pageCount={pages}
      />
      <Button
        appearance={ButtonAppearance.SEARCH_PAGINATION}
        className={styles.nextButton}
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage - 1 === pages - 1 && true}
        data-testid="next"
      >
        <>Next..{<Icon name={IconNames.ARROW_ICON} size="xs" />}</>
      </Button>
    </div>
  )
}

export default UkpnPaginationControls
