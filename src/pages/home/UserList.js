import React from 'react';

const UserListComponent = ({users}) => {

	return (
		<tbody>
			{users.map(user => (
				<tr key={user.userId}>
					<td><a href={`/user/${user.userId}`}>{user.userId}</a></td>
					<td><a href={`/user/${user.userId}`}>{user.name}</a></td>
					<td><a href={`/user/${user.userId}`}>{user.email}</a></td>
					<td><a href={`/user/${user.userId}`}>{user.phone}</a></td>
					<td><a href={`/user/${user.userId}`}>{user.username}</a></td>
					<td><a href={`/user/${user.userId}`}>{user.website}</a></td>
				</tr>
			))}
		</tbody>
	)
};

export const UserList = (UserListComponent);
