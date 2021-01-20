import { apiGetVideoLatest, apiUpdateStatusLesson, apiUpdateCurrentTimeLearnVideo } from '../services/lesson-services';

export const getVideoLatestLesson = (token, courseId, lesson, setVideo, setSnackbar) => {
    apiGetVideoLatest(token, courseId, lesson.id)
    .then((response) => {
        if (response.status === 200) {
            setVideo({ 
                name: lesson.name, 
                link: response.data.payload.videoUrl, 
                currentTime: response.data.payload.currentTime 
            });
            console.log(response.data);
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
            console.log("Lesson is finished");
        } else {
            console.log("400: Error"); 
        }
    })
    .catch((error) => {
        console.log("500: Error");
    })
}

export const updateCurrentTimeLearnVideo = (token, lessonId, currentTime, setSnackbar) => {
    apiUpdateCurrentTimeLearnVideo(token, lessonId, currentTime)
    .then((response) => {
        if (response.status === 200) {
            setSnackbar({ open: true, status: response.status, message: response.data.message });
        } else {
            setSnackbar({ open: true, status: response.status, message: response.data.message });
        }
    })
    .catch((error) => {
        setSnackbar({ open: true, status: 500, message: "Error" });
    })
} 