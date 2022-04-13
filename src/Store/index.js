import {combineReducers, createStore} from "redux";
import newsReducer from "./NewsReducer";
import criteriaReducer from "./CriteriaReducer";
import settingReducer from "./SettingReducer";

const rootReducer = combineReducers({
    news: newsReducer,
    criteria: criteriaReducer,
    setting: settingReducer,
})
const store = createStore(rootReducer)

export {store}