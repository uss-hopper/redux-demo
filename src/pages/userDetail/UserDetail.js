import React from 'react';
import {connect} from "react-redux";
import {UserList} from "../user-list";

const UserDetailComponent = () => {

	return (
		<>
			<main className="container">
				<table className="table table-responsive">
					<tbody>
						<tr>
							<th>UserDetail</th>
							<th>UserDetail</th>
							<th>UserDetail</th>
							<th>UserDetail</th>
							<th>UserDetail</th>
							<th>UserDetail</th>
						</tr>
						<UserList/>
					</tbody>
				</table>
			</main>
		</>
	)
};

export const UserDetail = connect()(UserDetailComponent);


