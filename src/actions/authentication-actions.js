import { apiLogin, apiRegister, apiForgetPassword, apiSignInWithGoogle } from '../services/authentication-services';
import { apiGetUserInfo } from '../services/user-services';
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const GET_USER_INFO = "GET_USER_INFO";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = (dispatch) => (email, password) => {
    apiLogin(email, password)
    .then((response) => {
        if (response.status === 200) {
            dispatch({ type: LOGIN_SUCCESSFUL, data: response.data });
        } else {
            dispatch({ type: LOGIN_FAILED });
        }
    })
    .catch((error) => {
        dispatch({ type: LOGIN_FAILED });
    });
}

export const signInWithGoogle = (dispatch) => (data) => {
    apiSignInWithGoogle(data)
    .then((response) => {
        if (response.status === 200) {
            dispatch({ type: LOGIN_SUCCESSFUL, data: response.data });
            apiGetUserInfo(response.data.token)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({ type: GET_USER_INFO, data: response.data.payload });
                }
            })
        } else {
            dispatch({ type: LOGIN_FAILED });
        }
    })
    .catch((error) => {
        dispatch({ type: LOGIN_FAILED });
    })
}

export const register = (username, email, phone, password, name, setSuccessful, setStatus) => {
    apiRegister(username, email, phone, password, name)
    .then((response) => {
        if (response.status === 200) {
            setSuccessful(true);
            setStatus({ open: true, status: 200, message: response.data.message });
        } else {
            setStatus({ open: true, status: response.status, message: response.data.message });
        }
    })
    .catch((error) => {
        setStatus({ open: true, status: 500, message: 'Error' });
    });
}

export const forgetPassword = (email, setStatus) => {
    apiForgetPassword(email)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ open: true, status: 200, message: response.data.message });
        } else {
            setStatus({ open: true, status: response.status, message: response.data.message });
        }
    })
    .catch((error) => {
        setStatus({ open: true, status: 500, message: 'Error' });
    })
}