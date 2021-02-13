import * as constants from "./constants/constants";

const initialState = {

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ACTION_SET_USER:
            return {
                ...state,
                ...Object.fromEntries(Object.entries(action)
                    .filter(entry => entry[0] !== "type"))
            }

        case constants.EVENT_AUTH_SUCCESS:
            return {
                ...state,
                ...action
            }

        default:
            return state;
    }
};

export default reducer;