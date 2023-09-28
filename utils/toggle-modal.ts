export enum ModalState {
  CLOSE = 'remove',
  OPEN = 'add',
}

export const toggleModal = (state: ModalState) => {
  document.body.classList[state]('modal-open')
  document.body.style.overflow = state === ModalState.CLOSE ? '' : 'hidden'
  document.body.setAttribute(
    'data-popup-open',
    state === ModalState.CLOSE ? 'false' : 'true'
  )
}
