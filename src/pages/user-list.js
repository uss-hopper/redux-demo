import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAllUsers} from "../shared/actions/get-all-users";

const UserListComponent = ({getAllUsers, users}) => {

	useEffect(() => {
			getAllUsers()
		},
		[getAllUsers]
	);

	return (
		<>
			{users.map(user => (
			<tr key={user.userId} href={`/users/${user.userId}`}>
				{/*<a href={`/users/${user.userId}`}>*/}
				<td>{user.userId}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td>{user.username}</td>
				<td>{user.website}</td>
				{/*</a>*/}
			</tr>
		))}
		</>
	)
};

const mapStateToProps = ({users}) => {
	return {users};
};

export const UserList = connect(mapStateToProps, {getAllUsers}
)(UserListComponent);
