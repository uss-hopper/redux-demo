import React from "react";
import {UsernameFooter} from "./UsernameFooter";

export const  PostCard = ({post}) => {

	return (
		<div className="card text-white bg-dark mb-3">
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
				<p className="card-text">{post.body}</p>
				<p className="card-text">
					<small className="text-muted">{post.username}</small>
				</p>
				<div className="card-footer text-muted text-center">
					<UsernameFooter userId={post.postUserId}/>
				</div>
			</div>
		</div>
	)
};