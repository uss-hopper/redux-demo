import React from 'react';
import { Route } from 'react-router';

const UserListComponent = ({users}) => {

	return (
		<Route render={ ({history}) => (
			<tbody>
				{users.map(user => (
					<tr key={user.userId} onClick={() => {history.push(`user/${user.userId}`)}}>
						<td>{user.userId}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
						<td>{user.username}</td>
						<td>{user.website}</td>
					</tr>
				))}
			</tbody>
		)}/>
	)
};

export const UserList = (UserListComponent);