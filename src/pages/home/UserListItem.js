import React from 'react';
import {Route} from 'react-router';

const UserListComponent = (props) => {
	const {user} = props;

	// This component takes advantage of the render prop pattern https://css-tricks.com/an-overview-of-render-props-in-react/.
	return (
		<>
			{/*the Route component wraps around the UserListComponent to give it access to the history prop inside of Route*/}
			<Route render={({history}) => (
				<tr
					onClick={() => {
						history.push(`user/${user.userId}`)
					}}>
					<td>{user.userId}</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.phone}</td>
					<td>{user.username}</td>
					<td>{user.website}</td>
				</tr>
			)}
			/>
		</>
	)
};

export const UserListItem = (UserListComponent);