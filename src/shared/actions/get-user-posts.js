import {httpConfig} from "../misc/http-config";
import _ from "lodash";
import {getUserByUserId} from "./get-all-users";

export const getAllPosts = () => async dispatch => {
	const {data} = await httpConfig(`/apis/users/?posts=true`);
	dispatch({type: "GET_ALL_POSTS", payload: data})
};

export const getUserPosts = (userId) => async dispatch => {
	const {data} = await httpConfig(`/apis/users/?postUserId=${userId}`);
	dispatch({type: "GET_USER_POSTS", payload: data})
};


export const getPostsAndUsers = () => async (dispatch, getState) => {

	await dispatch(getAllPosts());
	//commented out lines below are equivalent to the _ chain method
	// const userIds = _.uniq(_.map(getState().posts, "userId"));
	// userIds.forEach(id => dispatch(fetchUser(id)));
	_.chain(getState().posts)
		.map("userId")
		.uniq()
		.forEach(id => dispatch(getUserByUserId(id)))
		.value()
};