import axios from 'axios';
import { API_URL } from '../Global/constant';

export const getProcessCourses = (token, setStatus) => {
    axios.get(API_URL + 'user/get-process-courses', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, courses: response.data.payload });
        } else {
            setStatus({ successful: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}