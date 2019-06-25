 import {httpConfig} from "../misc/useAxios";

export const getAllUsers = () => async dispatch => {
	//const {data} = await httpConfig('/apis/users/');

	let data = [];
	dispatch({type: "JUNK", payload: data })
};