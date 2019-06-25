 import {useAxios} from "../hooks/useAxios";

export const getAllUsers = () => async dispatch => {
	const {data} = await useAxios('/apis/users/');
	console.log(data);
	dispatch({type: "GET_ALL_USERS", payload: data })
};