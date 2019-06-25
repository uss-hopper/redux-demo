import {useSelector, useDispatch} from "react-redux";
import React, {useEffect} from 'react';
import {getUserPosts} from "../../shared/actions/get-user-posts";
import {PostCard} from "./PostCard";

export const UserPosts = ({match}) => {

	const dispatch = useDispatch();

	const sideEffects = () => {

		dispatch(getUserPosts(match.params.userId))
	};

	const sideEffectInputs = [match.params.userId];

	useEffect(sideEffects, sideEffectInputs);

	const userPosts = useSelector(state => (
		state.userPosts ? state.userPosts : []
	));

	const posts = userPosts.posts ? [...userPosts.posts] : [];
	const user = userPosts.user ? {...userPosts.user} : null;

	return (
		<>
			<main className="container">
				{user && (<h2>{user.name}</h2>)}
				<div className="card-group card-columns">
					{posts.map(post => (
							<PostCard post={post} key={post.postId}/>
						)
					)}
				</div>
			</main>
		</>
	)
};
