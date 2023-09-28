interface ShowingMessageType {
  currentPage: number
  total: number
}

export const showingMessage = ({ currentPage, total }: ShowingMessageType) => {
  const lastIndexOnPage = currentPage * 10
  if (total <= 10) {
    return `${total} of ${total} results`
  } else {
    return `${currentPage - 1 > 0 ? (currentPage - 1) * 10 + 1 : currentPage}-${
      lastIndexOnPage > total ? total : lastIndexOnPage
    } of ${total} results`
  }
}
