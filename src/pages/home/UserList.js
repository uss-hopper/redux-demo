import React from 'react';
// import { Route } from 'react-router-dom'

const UserListComponent = ({users},props) => {

	return (
		<>
			{users.map(user => (
				<tr key={user.userId}
					// onClick={() => {
					// 	return props.router.push({
					// 		pathname: '/user/${user.userId}',
					// 		state: {
					// 			userId: user.userId
					// 		}
					// 	});
					// }}
				>


					<a href={`/user/${user.userId}`}>
						<td>{user.userId}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
						<td>{user.username}</td>
						<td>{user.website}</td>
					</a>
				</tr>
			))}
		</>
	)
};

export const UserList = (UserListComponent);
