import { apiGetVideoLatest, apiUpdateStatusLesson } from '../services/lesson-services';

export const getVideoLatestLesson = (token, courseId, lesson, setVideo, setSnackbar) => {
    apiGetVideoLatest(token, courseId, lesson.id)
    .then((response) => {
        if (response.status === 200) {
            setVideo({ name: lesson.name, link: response.data.payload.videoUrl });
        } else {
            setSnackbar({ open: true, status: response.status, message: response.data.message });
        }
    })
    .catch((error) => {
        setSnackbar({ open: true, status: 500, message: "Can't load video" });
    })
    return null;
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