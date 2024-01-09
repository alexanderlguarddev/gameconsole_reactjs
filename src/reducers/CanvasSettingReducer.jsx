import {
    UPDATE_CANVAS_SIZE
} from '../types/CanvasSettingTypes'

const initialState  = {
    canvas: {
        width: -1,
        height: -1
    }
}

export default function(state = initialState, action) {
    const { type } = action

    switch(type) {
        case UPDATE_CANVAS_SIZE:
            return {
                ...state,
                canvas: {
                    width: action.payload.canvasWidth,
                    height: action.payload.canvasHeight,
                }
            }

        default:
            return state
    }
}