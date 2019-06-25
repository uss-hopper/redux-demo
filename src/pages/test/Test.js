import React, {useEffect, useState} from "react";
import {useAxios} from "../../shared/hooks/useAxios";

export const Test = () => {

	const [uuid, setData] = useState("655799ab-830d-4ae3-add2-0dff1af04170");
	const [message, setMessage] = useState(undefined);


	useEffect(() => {

	});

	console.log(message);

	return (
		<>
			<h1>test axios</h1>
		</>
	)
};