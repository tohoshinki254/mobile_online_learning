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

export const likeCourse = (token, courseId, setStatus, setState) => {
    axios.post(API_URL + 'user/like-course', {
        courseId: courseId
    } ,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, message: response.data.message });
            setState({ successful: true, status: true });
        } else {
            setStatus({ successful: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}

export const getFavoriteCourses = (token, setStatus) => {
    axios.get(API_URL + 'user/get-favorite-courses', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, courses: response.data.payload });
        } else {
            setStatus({ successful: false, courses: [] });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, courses: [] });
    })
}

export const getRecommendCourses = (userId, limit, offset, setStatus) => {
    axios.get(API_URL + 'user/recommend-course/' + userId + '/' + limit + '/' + offset)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, courses: response.data.payload });
        } else {
            setStatus({ successful: false, courses: [] });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, courses: [] });
    })
}

export const updateProfile = (token, data, setStatus) => {
    axios.put(API_URL + 'user/update-profile', data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, info: response.data.userInfo });
        } else {
            setStatus({ successful: false, info: null });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, info: null });
    })
}

export const getCourseLikeStatus = (token, courseId, setStatus) => {
    axios.get(API_URL + 'user/get-course-like-status/' + courseId, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, status: response.data.likeStatus });
        } else {
            setStatus({ successful: false, status: null });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, status: null });
    })
}