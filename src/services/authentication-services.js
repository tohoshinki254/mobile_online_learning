import axios from 'axios';
import { API_URL } from '../Global/constant';

export const apiLogin = (email, password) => {
    return axios.post(API_URL + 'user/login', {
        email: email,
        password: password
    });
};

export const apiRegister = (username, email, phone, password, name) => {
    return axios.post(API_URL + 'user/register', {
        username: username,
        email: email,
        phone: phone,
        password: password,
        name: name
    });
};

export const apiForgetPassword = (email) => {
    return axios.post(API_URL + 'user/forget-pass/send-email', {
        email: email
    });
};

export const apiSignInWithGoogle = (data) => {
    return axios.post(API_URL + 'user/login-google-mobile', data);
}