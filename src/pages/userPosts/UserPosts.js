import {connect} from "react-redux";
import React, {useEffect} from 'react';
import {getUserPosts} from "../../shared/actions/get-user-posts";


const UserPostsComponent = ({getUserPosts, userPosts}) => {

	useEffect(() => {
			getUserPosts()
		},
		[getUserPosts]
	);

	console.log(userPosts);


	return (
		<>
			<h2>hello world</h2>
		{/*	<main  className="container">*/}
		{/*			<h4>{{userPosts.name}}'s posts</h4>*/}

		{/*		<div className="card-columns">*/}
		{/*			{userPosts.map(userPost => (*/}
		{/*			<div className="card">*/}
		{/*			<div className="card-body">*/}
		{/*				<h5 className="card-title">{{userPost.title}}</h5>*/}
		{/*				<p className="card-text">{{userPost.body}}</p>*/}
		{/*				<p className="card-text">*/}
		{/*					<small className="text-muted">{{userPost.username}}</small>*/}
		{/*				</p>*/}
		{/*			</div>*/}
		{/*			</div>*/}
		{/*			))}*/}
		{/*		</div>*/}

		{/*	</main>*/}
		</>
	)
};

const mapStateToProps = ({userPosts}) => {
	return {userPosts};
};

export const UserPosts = connect(mapStateToProps, {getUserPosts})(UserPostsComponent);
