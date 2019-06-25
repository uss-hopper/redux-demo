import axios from "axios/index";


export async function useAxios(path, verb = null, requestObject = null) {

	const http = axios.create()
		.interceptors.response.use(function({data, headers}) {
			if(data.status === 200) {
				return data.data !== null
					? {message: null, data: data.data, status: 200, type: " alert alert-success", headers: {...headers}}
					: {message: data.message, status: 200, type: " alert alert-success", data: null, headers: {...headers}};
			}
			return (
				{
					message: data.message,
					status: data.status,
					type: "alert alert-danger",
					data: null,
					headers: {...headers}
				}
			)

		}, function(error) {
			// Do something with response error
			console.log(error);
			return Promise.reject(error);
		});

	const uuidv4ExpressionObject = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);

	switch(verb) {

		case "post":
			return await requestObject ? http.post(path, requestObject) : undefined;

		case "put":
			return await requestObject ? preformPut(path) : undefined;
		case "delete":
			return await http.delete(path);

		default:
			return await http.get(path);

	}

	function preformPut(path, requestObject) {
		let id = path.substring(path.lastIndexOf('/') + 1);
		console.log(uuidv4ExpressionObject.match(id));
	}
}

// /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test('a6d2cf1e-ec3a-4341-8573-d7ec9b17f50c');


