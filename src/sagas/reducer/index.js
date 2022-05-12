export const initialState = {
	TokenUser: null,
	AuthSuccessfulTrue: false,
	AuthSuccessfulFalse: false,
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case "TOKEN_USER":
			return {
				...state,
				TokenUser: action.payload,
			};
		case "NEW_TOKEN_USER":
			return {
				...state,
				TokenUser: action.payload,
			};
		case "SUCCESSFUL_USER_YES":
			return {
				...state,
				AuthSuccessfulTrue: action.payload.AuthSuccessfulTrue,
				AuthSuccessfulFalse: action.payload.AuthSuccessfulFalse,
			};
		case "SUCCESSFUL_USER_NO":
			return {
				...state,
				AuthSuccessfulTrue: action.payload.AuthSuccessfulTrue,
				AuthSuccessfulFalse: action.payload.AuthSuccessfulFalse,
			};
		case "TOKEN_OUT_USER":
			return {
				...state,
				TokenUser: action.payload,
				AuthSuccessfulTrue: action.payload,
				AuthSuccessfulFalse: action.payload,
			};

		default:
			return state;
	}
}
