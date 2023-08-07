import { combineReducers,createStore } from "redux";
import { QuanLySinhVien } from "./QuanLySinhVien";
const rootReducer = combineReducers({
    QuanLySinhVien,
});
export const store =createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    );