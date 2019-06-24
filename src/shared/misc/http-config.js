import axios from "axios/index";


export async function useAxios(path, verb, requestObject = null) {

	const http = axios.create();

	http.interceptors.response.use(function({data, headers}) {
		if(data.status === 200) {
			return data.data !== null
				? {message: null, data: data.data, status: 200, type: " alert alert-success", headers: {...headers}}
				: {message: data.message, status: 200, type: " alert alert-success", data: null, headers: {...headers}};
		}
		return {message: data.message, status: data.status, type: "alert alert-danger", data: null, headers: {...headers}}

	}, function(error) {
		// Do something with response error
		console.log(error);
		return Promise.reject(error);
	});


	switch(verb) {

		case "get":
			return await http.get(path);

		case "post":
			return await requestObject ? http.post(path, requestObject) : "no requestObject";

			default:
			return "request was not properly formatted"

	}
}
