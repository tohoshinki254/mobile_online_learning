import axios from 'axios';
import { API_URL } from '../Global/constant';

export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = (dispatch) => (username, password) => {
    axios.post(API_URL + 'user/login', {
        email: username,
        password: password
    })
    .then((response) => {
        if (response.status === 200) {
            dispatch({ type: LOGIN_SUCCESSFUL, data: response.data })
        } else {
            dispatch({ type: LOGIN_FAILED })
        }
    })
    .catch((error) => {
        dispatch({ type: LOGIN_FAILED })
    });
}

export const register = (username, email, phone, password, name, setStatus) => {
    axios.post(API_URL + 'user/register', {
        username: username,
        email: email,
        phone: phone,
        password: password,
        name: name
    })
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
    axios.post(API_URL + 'user/forget-pass/send-email', {
        email: email
    })
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