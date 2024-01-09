import { useSelector, useDispatch } from 'react-redux'

import { updateCanvasSize } from '../actions/CanvasSettingAction'

const useCanvasSetting = () => {
    const dispatch = useDispatch()

    const { canvas } = useSelector(state => state.canvas)

    const actionUpdateCanvasSize = (canvasWidth, canvasHeight) => dispatch(updateCanvasSize(canvasWidth, canvasHeight))

    return {
        canvas,
        updateCanvasSize: actionUpdateCanvasSize
    }
}

export default useCanvasSetting