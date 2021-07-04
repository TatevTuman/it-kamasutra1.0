import types from "./actions";


const initialState = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    }


}

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LOGIN_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export default reducerAuth;


export const setLoginData = (id, email, login) => {
    return {type: types.SET_LOGIN_DATA, data: {id, email, login}}
}