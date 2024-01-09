import { combineReducers } from "redux"
import CanvasSettingReducer from "./CanvasSettingReducer"
import ModalReducer from "./ModalReducer"

export default combineReducers({
    canvas: CanvasSettingReducer,
    modal: ModalReducer
});