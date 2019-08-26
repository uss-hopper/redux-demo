import {useSelector, useDispatch} from "react-redux";
import React, {useEffect} from 'react';
import {getUserPosts} from "../../shared/actions/get-user-posts";
import {PostCard} from "./PostCard";

export const UserPosts = ({match}) => {


	// Returns the the userPosts store from redux and assigns it to the userPosts variable.
	const userPosts = useSelector(state => state.userPosts ? state.userPosts : []);


	// Since userPosts contains a collection of different data from the backend  each piece must be assigned to a new variable.
	const posts = userPosts.posts ? [...userPosts.posts] : [];
	const user = userPosts.user ? {...userPosts.user} : null;

	const dispatch = useDispatch();

	const sideEffects = () => {

		// The dispatch function takes actions as arguments to make changes to the store/redux.
		dispatch(getUserPosts(match.params.userId))
	};

	// Declare any inputs that will be used by functions that are declared in sideEffects.
	const sideEffectInputs = [match.params.userId];


/**
 * Pass both sideEffects and sideEffectInputs to useEffect.
 * useEffect is what handles rerendering of components when sideEffects resolve.
 * E.g when a network request to an api has completed and there is new data to display on the dom.
 **/
	useEffect(sideEffects, sideEffectInputs);

	return (
		<>
			<main className="container">
				{user && (<h2>{user.name}</h2>)}
				<div className="card-group card-columns">
					{
						posts.map(post => <PostCard  key={post.postId} post={post} />)
					}
				</div>
			</main>
		</>
	)
};
