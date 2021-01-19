import axios from 'axios';
import { API_URL } from '../Global/constant';

export const apiGetTopNew = (limit, page) => {
    return axios.post(API_URL + 'course/top-new', {
        limit: limit,
        page: page
    });
};

export const apiGetTopSell = (data) => {
    return axios.post(API_URL + 'course/top-sell', data);
};

export const apiGetTopRate = (data) => {
    return axios.post(API_URL + 'course/top-rate', data);
};

export const apiGetDetailWithLesson = (token, courseId) => {
    return axios.get(API_URL + 'course/detail-with-lesson/' + courseId, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiGetCourseInfo = (token, id) => {
    return axios.get(API_URL + 'course/get-course-info?id=' + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiGetCourseFollowFavoriteCategories = (data) => {
    return axios.post(API_URL + 'course/courses-user-favorite-categories', data);
};

export const apiSearch = (data) => {
    return axios.post(API_URL + 'course/search', data);
};

export const apiSearchV2 = (keyword, token) => {
    return axios.post(API_URL + 'course/searchV2', {
        token: token,
        keyword: keyword,
        limit: 20,
        page: 1
    });
};

export const apiSearchHistory = (token) => {
    return axios.get(API_URL + 'course/search-history', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiDeleteSearchHistory = (token, id) => {
    return axios.delete(API_URL + 'course/delete-search-history/' + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiGetCourseDetails = (id) => {
    return axios.get(API_URL + 'course/get-course-detail/' + id + '/7');
};

export const apiPostRatingCourse = (token, data) => {
    return axios.post(API_URL + 'course/rating-course', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiLastWatchedLesson = (token, courseId) => {
    return axios.get(API_URL + 'course/last-watched-lesson/' + courseId, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}