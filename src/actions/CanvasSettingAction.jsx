import {
    UPDATE_CANVAS_SIZE
} from '../types/CanvasSettingTypes'

export function updateCanvasSize(canvasWidth, canvasHeight) {
    return async (dispatch) => dispatch({
        type: UPDATE_CANVAS_SIZE,
        payload: {
            canvasWidth,
            canvasHeight
        }
    })
}