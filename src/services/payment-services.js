import axios from 'axios';
import { API_URL } from '../Global/constant';

export const apiBuyFreeCourse = (token, data) => {
    return axios.post(API_URL + 'payment/get-free-courses', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiGetPaymentInfo = (token, courseId) => {
    return axios.get(API_URL + 'payment/get-course-info/' + courseId, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};