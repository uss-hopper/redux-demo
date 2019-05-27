import React from 'react';
import {connect} from "react-redux";
import {UserList} from "../user-list";

const HomeComponent = () => {

	return (
		<>
			<main className="container">
				<table className="table table-responsive">
					<tbody>
					<tr>
						<th>User Id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Username</th>
						<th>Website</th>
					</tr>
			<UserList/>
					</tbody>
			</table>
		</main>
		</>
	)
};

export const Home = connect()(HomeComponent);


