import { LOGIN_SUCCESSFUL, LOGIN_FAILED, GET_USER_INFO } from '../actions/authentication-actions';

export const reducer = (prevState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL: 
            return {...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.userInfo};
        case LOGIN_FAILED:
            return {...prevState, isAuthenticated: false}
        case GET_USER_INFO:
            return {...prevState, userInfo: action.data}
        default:    
            throw new Error();
    }
}