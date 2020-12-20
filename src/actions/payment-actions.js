import axios from 'axios';
import { API_URL } from '../Global/constant';

export const buyFreeCourse = (token, data, setStatus) => {
    axios.post(API_URL + 'payment/get-free-courses', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, message: response.data.message });
        } else {
            setStatus({ successful: false, message: response.data.message });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, message: 'Error' });
    })
}

export const getPaymentInfo = (token, courseId, setStatus) => {
    axios.get(API_URL + 'payment/get-course-info/' + courseId, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, info: response.data });
        } else {
            setStatus({ successful: false, info: null });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, info: null });
    })
}