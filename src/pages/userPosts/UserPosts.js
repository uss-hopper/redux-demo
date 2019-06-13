import {connect} from "react-redux";
import React, {useEffect} from 'react';
import {getUserPosts} from "../../shared/actions/get-user-posts";

const UserPostsComponent = (props) => {
	const {getUserPosts, match, user, posts} = props;

	useEffect(() => {
			getUserPosts(match.params.userId)
		},
		[getUserPosts, match.params.userId]
	);

	const renderUserName = () => {

		if(user) {
			return (
				<h2>{user.name}</h2>
			);
		}
	};

	const renderPosts = () => {

		return posts.map(index => {
			return (

				<div className="card text-white bg-dark mb-3" key={index.postId}>
					<div className="card-body">
						<h5 className="card-title">{index.title}</h5>
						<p className="card-text">{index.body}</p>
						<p className="card-text">
							<small className="text-muted">{index.username}</small>
						</p>
					</div>
				</div>
			)
		})

	};

	return (
		<>
			<main className="container">
				{renderUserName()}
				<div className="card-group card-columns">
					{renderPosts()}
				</div>
			</main>
		</>
	)
};

const mapStateToProps = ({userPosts}) => {
	if(userPosts.user && userPosts.posts) {
		return {user: userPosts.user, posts: userPosts.posts}
	}
	return {user: null, posts: []}
};

export const UserPosts = connect(mapStateToProps, {getUserPosts})(UserPostsComponent);