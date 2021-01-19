import axios from 'axios';
import { API_URL } from '../Global/constant';

export const apiUpdateStatusLesson = (token, lessonId) => {
    return axios.post(API_URL + 'lesson/update-status', {
        lessonId: lessonId,
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export const apiGetVideoLatest = (token, courseId, lessonId) => {
    return axios.get(API_URL + 'lesson/video/' + courseId + '/' + lessonId, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export const apiUpdateCurrentTimeLearnVideo = (token, lessonId, currentTime) => {
    return axios.put(API_URL + 'lesson/update-current-time-learn-video', {
        lessonId: lessonId,
        currentTime: currentTime
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}