import {httpConfig} from "../misc/http-config";

export const getUserPosts = (userId) => async dispatch => {
	console.log(userId);
	const {data} = await httpConfig(`/apis/users/?postUserId=${userId}`);
	dispatch({type: "GET_USER_POSTS", payload: data })
};