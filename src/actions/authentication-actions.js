import { apiLogin, apiRegister, apiForgetPassword, apiSignInWithGoogle } from '../services/authentication-services';

export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
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
            console.log(response.data);
            dispatch({ type: LOGIN_SUCCESSFUL, data: response.data });
        } else {
            dispatch({ type: LOGIN_FAILED });
        }
    })
    .catch((error) => {
        dispatch({ type: LOGIN_FAILED });
    })
}

export const register = (username, email, phone, password, name, setStatus) => {
    apiRegister(username, email, phone, password, name)
    .then((response) => {
        if (response.status === 200) {
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