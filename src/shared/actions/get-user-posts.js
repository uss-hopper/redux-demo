import {httpConfig} from "../misc/http-config";

export const getUserPosts = (userId) => async dispatch => {
 let userId = "19929f9f-df48-4f3f-94b6-ce062d9d178d";
	console.log(userId);

	const {data} = await httpConfig(`/apis/users/?postUserId=${userId}`);
	dispatch({type: "GET_USER_POSTS", payload: data })
};