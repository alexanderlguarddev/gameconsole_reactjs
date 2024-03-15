import * as yup from "yup"

export const SpriteSheetSchema = yup.object({
    numberOfFrames: yup.number().required().positive().integer(),
    framesPerRows: yup.number().required().positive().integer(),
})