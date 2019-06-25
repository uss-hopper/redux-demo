import React, {useEffect, useState} from "react";
import {useAxios} from "../../shared/misc/useAxios";

export const Test = () => {

	const [data, setData] = useState([]);



	useEffect(()=> {
		setData(useAxios("apis/tweet/"))
	}, []);

	console.log(data);

	return(
		<>
			<h1>test axios</h1>
		</>
	)
};