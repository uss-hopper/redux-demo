import React  from 'react';
import { Route } from 'react-router';
import {useSelector} from "react-redux";

export const UsernameFooter = ({userId}) => {


	const user = useSelector((state, ownProps) => {
		return state.users ? state.users.find( user => userId === user.postUserId) : null
	});

	return <p>username</p>


};