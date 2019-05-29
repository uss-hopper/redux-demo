import {connect} from "react-redux";
import React, {useEffect} from 'react';
import {getUserPosts} from "../../shared/actions/get-user-posts";
// import _ from "lodash";


const UserPostsComponent = (props) => {
	const {getUserPosts, match, user, posts} = props;


	// const [posts, setPosts] = useState([]);
// setPosts(userPosts.posts);
// console.log(posts);

	// userPosts.forEach(a => {console.log(a)});
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
		if (posts) {
			return posts.map(index => {
				return (

			<div className="card"  key={index.postId}>
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
		}
	}


	return (
		<>
			<main className="container">

				{renderUserName()}
				{renderPosts()}

				{/*<h4>{userPosts}'s posts</h4>*/}

				{/*<div className="card-columns">*/}
				{/*	{userPosts.posts.map(post => (*/}
				{/*	<div className="card">*/}
				{/*	<div className="card-body">*/}
				{/*		<h5 className="card-title">{{post.title}}</h5>*/}
				{/*		<p className="card-text">{{post.body}}</p>*/}
				{/*		<p className="card-text">*/}
				{/*			<small className="text-muted">{{post.username}}</small>*/}
				{/*		</p>*/}
				{/*	</div>*/}
				{/*	</div>*/}
				{/*	))}*/}
				{/*</div>*/}


				{/*{posts.map(post => (*/}
				{/*	<tr key={post.postId}*/}
				{/*	>*/}
				{/*			<td>{post.title}</td>*/}
				{/*			/!*<td>{user.name}</td>*!/*/}
				{/*			/!*<td>{user.email}</td>*!/*/}
				{/*			/!*<td>{user.phone}</td>*!/*/}
				{/*			/!*<td>{user.username}</td>*!/*/}
				{/*			/!*<td>{user.website}</td>*!/*/}

				{/*	</tr>*/}
				{/*))}*/}
			</main>
		</>
	)
};

const mapStateToProps = ({userPosts}) => {
	if(userPosts.user && userPosts.posts ) {
		return {user: userPosts.user, posts: userPosts.posts}
	}
	return {user: null, posts: null}
};

export const UserPosts = connect(mapStateToProps, {getUserPosts})(UserPostsComponent);


				{/*<h2 key={index.postId}>{index.postId}</h2>*/}