import {useAxios} from "../misc/useAxios";

export const getUserPosts = (userId) => async dispatch => {
	const {data} = await useAxios(`/apis/users/?postUserId=${userId}`);
	console.log(data);
	dispatch({type: "GET_USER_POSTS", payload: data })
};