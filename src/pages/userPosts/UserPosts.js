import {connect} from "react-redux";
import React, {useEffect} from 'react';
import {getUserPosts} from "../../shared/actions/get-user-posts";
import _ from "lodash";


const UserPostsComponent = ({getUserPosts, userPosts}) => {


	// userPosts.forEach(a => {console.log(a)});
	useEffect(() => {
			getUserPosts()
		},
		[getUserPosts]
	);
	const user = {postId: null, postUserId: null, body: null, title: null};

	_.forEach(userPosts, function(index) {
		typeof(index) === "object"
			? user = inde
			:
	});
	// const posts =[];
	// posts.forEach(({title, postUserId, postId, body}) => {
	// 	posts.push({postId,postUserId, body, title});
	// });

	return (
		<>
			<h2>hello world</h2>
			<main className="container">
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


				{/*{userPosts.posts.map(post => (*/}
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
	return {userPosts};
};

export const UserPosts = connect(mapStateToProps, {getUserPosts})(UserPostsComponent);
