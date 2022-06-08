import { combineReducers } from "redux";
import uiReducer from "./reducers/ui/ui.slice";
import performanceReducer from "./reducers/performance/performance.slice";
import marathonReducer from "./reducers/marathon/marathon.slice";
import activityReducer from "./reducers/activity/activity.slice";


export const rootReducer = combineReducers({
    ui: uiReducer,
    performance: performanceReducer,
    marathon: marathonReducer,
    activity: activityReducer
})