
export const initialState = {
    hasAccount: false,
    AuthSuccessfulTrue: false,
    AuthSuccessfulFalse: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case 'TURN_USER':
            return {
                ...state,
                hasAccount: action.payload
            };
        case 'SUCCESSFUL_USER_YES':
            return {
                ...state,
                AuthSuccessfulTrue: action.payload.AuthSuccessfulTrue,
                AuthSuccessfulFalse: action.payload.AuthSuccessfulFalse
            };
        case 'SUCCESSFUL_USER_NO':
            return {
                ...state,
                AuthSuccessfulTrue: action.payload.AuthSuccessfulTrue,
                AuthSuccessfulFalse: action.payload.AuthSuccessfulFalse
            };
        default: return state
    }
};