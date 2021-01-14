import axios from 'axios';
import { API_URL } from '../Global/constant';

export const apiGetInstructors = () => {
    return axios.get(API_URL + 'instructor');
};

export const apiGetDetailInstructor = (id) => {
    return axios.get(API_URL + 'instructor/detail/' + id);
};