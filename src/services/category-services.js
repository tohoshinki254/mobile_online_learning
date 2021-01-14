import axios from 'axios';
import { API_URL } from '../Global/constant';

export const apiGetAllCategory = () => {
    return axios.get(API_URL + 'category/all');
};

export const apiGetCategoryDetails = (id) => {
    return axios.get(API_URL + 'category/' + id);
};