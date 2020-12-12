import axios from 'axios';
import { API_URL } from '../Global/constant';

export const getInstructors = (setStatus) => {
    axios.get(API_URL + 'instructor')
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, list: response.data.payload });
        } else {
            setStatus({ successful: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}

export const getDetailInstructor = (id, setStatus) => {
    axios.get(API_URL + 'instructor/detail' + id)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, info: response.data.payload });
        } else {
            setStatus({ successful: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}