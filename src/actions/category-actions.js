import axios from 'axios';
import { API_URL } from '../Global/constant';

export const getAllCategory = (setStatus) => {
    axios.get(API_URL + 'category/all')
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, list: response.data.payload });
        } else {
            setStatus({ successful: false, list: [] });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}