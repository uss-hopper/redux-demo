import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {UserList} from "./UserList";
import {getAllUsers} from "../../shared/actions/get-all-users";

const HomeComponent = (props) => {

	const {getAllUsers, users} = props;

	useEffect(() => {
			getAllUsers()
		},
		[getAllUsers]
	);

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
			</table>
		</main>
	)
};

const mapStateToProps = ({users}) => {
	return {users};
};

export const Home = connect(mapStateToProps, {getAllUsers})(HomeComponent);


