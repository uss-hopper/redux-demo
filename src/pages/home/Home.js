import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {UserList} from "./UserList";
import {getAllUsers} from "../../shared/actions/get-all-users";

const HomeComponent = ({getAllUsers, users}) => {

	useEffect(() => {
			getAllUsers()
		},
		[getAllUsers]
	);

	return (
			<main className="container">
				<table className="table table-responsive">
					<thead>
					<tr>
						<th>User Id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Username</th>
						<th>Website</th>
					</tr>
					</thead>
			<UserList users={users}/>
			</table>
		</main>
	)
};

const mapStateToProps = ({users}) => {
	return {users};
};

export const Home = connect(mapStateToProps, {getAllUsers})(HomeComponent);


