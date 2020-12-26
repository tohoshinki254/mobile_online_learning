import axios from 'axios';
import { API_URL } from '../Global/constant';

export const buyFreeCourse = (token, data, setState, setSnackbar) => {
    axios.post(API_URL + 'payment/get-free-courses', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setState({ successful: true, info: true });
        } else {
            setSnackbar({ open: true, status: response.status, message: response.data.message });
        }
    })
    .catch((error) => {
        setSnackbar({ open: true, status: 500, message: 'Error' });
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
            setStatus({ successful: true, info: response.data.didUserBuyCourse });
        } else {
            setStatus({ successful: false, info: null });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, info: null });
    })
}