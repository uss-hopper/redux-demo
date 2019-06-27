import React  from 'react';
import {useSelector} from "react-redux";

export const UsernameFooter = ({userId}) => {


	const user = useSelector((state) => {
		return state.users ? state.users.find( user => userId === user.userId) : null
	});
	return(
		<>
			{user && <h3>{user.username}</h3>}
		</>
	)
};