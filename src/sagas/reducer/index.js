
export const initialState = {
    hasAccount: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case 'TURN_USER':
            return {
                ...state,
                hasAccount: action.payload
            };
        default: return state
    }
};