import axios from 'axios';
import { API_URL } from '../Global/constant';

export const apiGetUserInfo = (token) => {
    return axios.get(API_URL + 'user/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiGetProcessCourse = (token) => {
    return axios.get(API_URL + 'user/get-process-courses', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiLikeCourse = (token, courseId) => {
    return axios.post(API_URL + 'user/like-course', {
        courseId: courseId
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiGetFavoriteCourses = (token) => {
    return axios.get(API_URL + 'user/get-favorite-courses', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiGetRecommendCourses = (userId, limit, offset) => {
    return axios.get(API_URL + 'user/recommend-course/' + userId + '/' + limit + '/' + offset);
};

export const apiUpdateProfile = (token, data) => {
    return axios.put(API_URL + 'user/update-profile', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiGetCourseLikeStatus = (token, courseId) => {
    return axios.get(API_URL + 'user/get-course-like-status/' + courseId, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const apiChangeAvatar = (token, formData) => {
    return axios.post(API_URL + 'user/upload-avatar', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    });
};