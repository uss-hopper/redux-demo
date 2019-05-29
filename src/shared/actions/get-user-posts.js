import {httpConfig} from "../misc/http-config";

export const getUserPosts = (userId) => async dispatch => {
	const {data} = await httpConfig(`/apis/users/?postUserId=${userId}`);
	dispatch({type: "GET_USER_POSTS", payload: data })
};