import React, {useEffect, useState} from "react";
import {useAxios} from "../../shared/misc/useAxios";

export const Test = () => {

	const [data, setData] = useState([]);
	const axios = useAxios;


	useEffect(()=> {
		const {data} = axios("/apis", "get");
		setData(data);
	}, []);

	console.log(data);

	return(
		<>
			<h1>test axios</h1>
		</>
	)
};