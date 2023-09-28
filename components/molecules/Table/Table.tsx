import { TableType, TableRowType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import RichText from '_atoms/RichText/RichText'
import styles from './Table.module.scss'
import React from 'react'

const Table = ({
  columns,
  columnHighlights,
  rowHighlights,
  removeBottomMargin,
}: TableType) => {
  const numberOfRows = columns?.reduce<number>((acc, column) => {
    if (column.rows && column.rows?.length > acc) {
      return column.rows.length
    }
    return acc
  }, 0)

  const transformColsToRows = () => {
    let rows: TableRowType[][] = []
    if (numberOfRows) {
      for (
        let tableRowIndex = 0;
        tableRowIndex < numberOfRows;
        tableRowIndex++
      ) {
        columns?.forEach((column) => {
          if (!rows[tableRowIndex]) {
            rows[tableRowIndex] = []
          }
          rows[tableRowIndex].push(
            column?.rows?.[tableRowIndex] || { cellContent: '' }
          )
        })
      }
    }

    return rows
  }

  const rowsToHighlight = rowHighlights?.map((row) => {
    return row.rowNumber
  })

  const columnToHighlight = columnHighlights?.map((column) => {
    return column.columnNumber
  })

  const desktopRows = transformColsToRows()

  return (
    <ComponentLayout
      innerClass={styles.table}
      removeBottomMargin={removeBottomMargin}
    >
      {columns?.length && (
        <>
          <div className={styles.mobileTable}>
            {columns?.map((column, index) => (
              <div
                key={index}
                className={styles.mobileColumn}
                data-column-highlight={columnToHighlight?.includes(index + 1)}
              >
                {columns[index].rows?.map((row, rowIndex) => (
                  <div
                    className={
                      rowIndex === 0
                        ? styles.tableHeader
                        : styles.mobileTableRow
                    }
                    key={rowIndex}
                    data-row-highlight={rowsToHighlight?.includes(rowIndex + 1)}
                  >
                    <RichText text={row.cellContent} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.desktopTable} data-col-number={columns.length}>
            {desktopRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={
                  rowIndex === 0
                    ? styles.desktopTableHeader
                    : styles.desktopTableBody
                }
                data-row-highlight={rowsToHighlight?.includes(rowIndex + 1)}
              >
                {row.map((cell, columnIndex) => (
                  <div
                    key={columnIndex}
                    className={
                      rowIndex === 0 ? styles.tableHeader : styles.tableCell
                    }
                    data-column-highlight={columnToHighlight?.includes(
                      columnIndex + 1
                    )}
                    data-is-first={rowIndex === 0}
                    data-is-last={rowIndex === desktopRows.length - 1}
                  >
                    <RichText text={cell.cellContent} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </ComponentLayout>
  )
}

export default Table
