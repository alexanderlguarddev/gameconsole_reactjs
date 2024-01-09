import { useSelector, useDispatch } from 'react-redux'

import { openModal, closeModal } from '../actions/ModalAction'

const useModal = () => {
    const dispatch = useDispatch()

    const { Sprite_Sheet } = useSelector(state => state.modal)

    const actionOpenModal = (modalName) => dispatch(openModal(modalName))
    const actionCloseModal = (modalName) => dispatch(closeModal(modalName))

    return {
        spriteSheetState: Sprite_Sheet,
        openModal: actionOpenModal,
        closeModal: actionCloseModal
    }
}

export default useModal