import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getPostsAndUsers} from "../../shared/actions/get-user-posts";
import {PostCard} from "../../shared/PostCard/PostCard";

export const Posts = () => {

	const dispatch = useDispatch();
	const posts = useSelector(state => (state.posts ? state.posts : []));

	const effects = () => {
		dispatch(getPostsAndUsers());
	};

	const inputs = [];

	useEffect(effects, inputs);


	return (
		<>
			<div className="card-columns">
				{posts.map(post => <PostCard post={post}/>)}
			</div>
		</>
	);


};

