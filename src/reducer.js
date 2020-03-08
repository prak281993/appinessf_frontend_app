const initialState = {
    isAuthenticated: false,
    authUser: {},
    allUsers: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                authUser: action.payload
            }

        case 'ALL_USERS':
            return {
                ...state,
                allUsers: action.payload
            }

        default:
            return state
    }
}


const isEmpty = (payload) => {
    return payload === undefined ||
        payload === null ||
        (typeof payload === 'object' && Object.keys(payload).length === 0) ||
        (typeof payload === 'string' && payload.trim().length === 0)
}

export default reducer;