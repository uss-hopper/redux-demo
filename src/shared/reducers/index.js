import {combineReducers} from "redux"
import userReducer from "./user-reducer";
import userPostsReducer from "./user-posts-reducer"

export const reducers = combineReducers({
	users: userReducer,
	userPosts: userPostsReducer,
});