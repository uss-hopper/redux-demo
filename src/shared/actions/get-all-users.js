import {httpConfig} from "../misc/http-config";

export const getAllUsers = () => async dispatch => {
	const {data} = await httpConfig('/apis/users/');
	dispatch({type: "GET_ALL_USERS", payload: data })
};