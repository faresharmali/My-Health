import { combineReducers } from "redux";
import DoctorReducer from "./DoctorReducer";
import LaboratoryReducer from "./LaboratoryReducer";
import RecordsReducer from "./RecordsReducer";
import authReducer from "./authReducer";
export default reducer = combineReducers({
    Doctors:DoctorReducer,
    Laboratories:LaboratoryReducer,
    Records:RecordsReducer,
    LoggedUser:authReducer


})