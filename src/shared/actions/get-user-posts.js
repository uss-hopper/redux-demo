import {httpConfig} from "../misc/http-config";

export const getUserPosts = (userId) => async dispatch => {
	//const {data} = await httpConfig(`/apis/users/?postUserId=${userId}`);
	let data = [];
	dispatch({type: "JUNK", payload: data })
};