import {
    SAVE_IMAGE_SPRITE
} from '../types/SpriteTypes'

const initialState  = {
    sprites: []
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case SAVE_IMAGE_SPRITE:

            let _newImage = payload

            return {
                ...state,
                sprites: [
                    ...state.sprites,
                    ..._newImage
                ],
            }

        default:
            return state
    }
}