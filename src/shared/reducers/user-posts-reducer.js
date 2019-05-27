export default (state = [], action) => {
	switch(action.type) {
		case "GET_USER_POSTS":
			return action.payload;
		default:
			return state;
	}
}