import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {UserList} from "./UserList";
import {getAllUsers} from "../../shared/actions/get-all-users";

export const Home= () => {

	const users = useSelector(state => {
		console.log(state);
		return state.users}
		);

	const dispatch = useDispatch();


	const effects = () => {
		dispatch(getAllUsers())
	};

	const inputs = [];

	useEffect(effects, inputs);

	return (
			<main className="container">
				<table className="table table-responsive table-hover table-dark">
					<thead>
					<tr>
						<th><h4>User Id</h4></th>
						<th><h4>Name</h4></th>
						<th><h4>Email</h4></th>
						<th><h4>Phone</h4></th>
						<th><h4>Username</h4></th>
						<th><h4>Website</h4></th>
					</tr>
					</thead>
					<UserList users={users}/>
				</table>
		</main>
	)
};



