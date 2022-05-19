export const initialState = {
	tokenUser: null,
	authSuccessfulTrue: false,
	authSuccessfulFalse: false,
	userEmail: "",
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case "TOKEN_USER":
			return {
				...state,
				tokenUser: action.payload,
			};
		case "NEW_TOKEN_USER":
			return {
				...state,
				tokenUser: action.payload,
			};
		case "USER_UID":
			return {
				...state,
				userEmail: action.payload,
			};
		case "SUCCESSFUL_USER_YES":
			return {
				...state,
				authSuccessfulTrue: action.payload.authSuccessfulTrue,
				authSuccessfulFalse: action.payload.authSuccessfulFalse,
			};
		case "SUCCESSFUL_USER_NO":
			return {
				...state,
				authSuccessfulTrue: action.payload.authSuccessfulTrue,
				authSuccessfulFalse: action.payload.authSuccessfulFalse,
			};
		case "TOKEN_OUT_USER":
			return {
				...state,
				tokenUser: action.payload,
				authSuccessfulTrue: action.payload,
				authSuccessfulFalse: action.payload,
			};

		default:
			return state;
	}
}
