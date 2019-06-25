import axios from "axios/index";


export async function useAxios(path, verb = null, requestObject = null) {

	const http = axios.create();
	http.interceptors.response.use(({data, headers}) => {
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
		return Promise.reject(error);
	});

	const uuidV4ExpressionObject = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);

	switch(verb) {

		case "post":
			return await requestObject ? preformPost(path, requestObject) : undefined;
		//
		case "put":
			return await requestObject ? preformPut(path) : undefined;
		 case "delete":
		 	return await http.delete(path);

		default:
			return await preformGet(path)

	}

	function preformPut(path, requestObject) {
		let id = path.substring(path.lastIndexOf('/') + 1);
		console.log(uuidV4ExpressionObject.exec(id));
		return  http.put(path,requestObject)
	}

	async function preformPost(path, requestObject) {
		return http.post(path, requestObject)
	}

	function preformGet(path) {
		return http.get(path);

	}
}


