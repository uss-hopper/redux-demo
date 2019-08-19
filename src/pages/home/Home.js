import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {UserListItem} from "./UserListItem";
import {getAllUsers} from "../../shared/actions/get-all-users";


export const Home = () => {

	// returns the users store from Redux and assigns it to the users variable
	const users = useSelector(state => state.users);

	// assign useDispatch reference to dispatch for later use.
	const dispatch = useDispatch();


	// Define the side effects that will occur in the application.
	// E.G code that handles dispatches to redux, API requests, or timers.
	function sideEffects() {
		dispatch(getAllUsers())
	}

	// Declare any inputs that will be used by functions that have sideEffects.
	const sideEffectInputs = [];

	/**
	 * Pass both sideEffects and sideEffectInputs to useEffect.
	 * useEffect is what handles rerendering of components when sideEffects resolve.
	 * Eg when a network request to an api has completed and there is new data to display on the dom.
	 */
	useEffect(sideEffects, sideEffectInputs);

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
				<tbody>
					{
						users.map(user => <UserListItem key={user.userId} user={user} /> )
					}
				</tbody>
			</table>
		</main>
	)
};



