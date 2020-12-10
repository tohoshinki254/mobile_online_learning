import axios from 'axios';
import { API_URL } from '../Global/constant';

export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = (dispatch) => (username, password) => {
    axios.post(API_URL + 'user/login', {
        email: username,
        password: password
    }).then((response) => {
        if (response.status === 200) {
            dispatch({ type: LOGIN_SUCCESSFUL, data: response.data })
        } else {
            dispatch({ type: LOGIN_FAILED })
        }
    }).catch((error) => {
        dispatch({ type: LOGIN_FAILED })
    });
}