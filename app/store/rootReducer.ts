import { combineReducers } from "redux";
import uiReducer from "./reducers/ui/ui.slice";
import authReducer from "./reducers/auth/auth.slice";
import performanceReducer from "./reducers/performance/performance.slice";
import marathonReducer from "./reducers/marathon/marathon.slice";
import activityReducer from "./reducers/activity/activity.slice";
import storyReducer from "./reducers/story/story.slice";
import userReducer from "./reducers/user/user.slice";
import eventReducer from "./reducers/events/events.slice"
import classReducer from "./reducers/class/class.slice"

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  performance: performanceReducer,
  marathon: marathonReducer,
  activity: activityReducer,
  story: storyReducer,
  user:userReducer,
  event:eventReducer,
  class:classReducer
});
