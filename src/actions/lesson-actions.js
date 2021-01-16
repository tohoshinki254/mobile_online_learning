import { apiGetVideoLatest, apiUpdateStatusLesson } from '../services/lesson-services';

export const getVideoLatestLesson = (token, courseId, lessonId) => {
    apiGetVideoLatest(token, courseId, lessonId)
    .then((response) => {
        if (response.status === 200) {

        } else {

        }
    })
    .catch((error) => {

    })
}

export const updateStatusLesson = (token, lessonId) => {
    apiUpdateStatusLesson(token, lessonId)
    .then((response) => {
        if (response.status === 200) {

        } else {
            
        }
    })
    .catch((error) => {

    })
}