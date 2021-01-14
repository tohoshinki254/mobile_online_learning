import { apiGetUserInfo, 
    apiGetProcessCourse, 
    apiLikeCourse, 
    apiGetFavoriteCourses, 
    apiGetRecommendCourses, 
    apiUpdateProfile, 
    apiGetCourseLikeStatus, 
    apiChangeAvatar 
} from '../services/user-services';

export const getUserInfo = (token, setStatus) => {
    apiGetUserInfo(token)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, info: response.data.payload });
        } else {
            setStatus({ successful: false, info: null });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, info: null });
    })
}

export const getProcessCourses = (token, setStatus) => {
    apiGetProcessCourse(token)
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

export const likeCourse = (token, courseId, setStatus, setSnackbar) => {
    apiLikeCourse(token, courseId)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, status: response.data.likeStatus });
        } else {
            setSnackbar({ open: true, status: response.status, message: response.data.message });
        }
    })
    .catch((error) => {
        setSnackbar({ open: true, status: response.status, message: response.data.message });
    })
}

export const getFavoriteCourses = (token, setStatus) => {
    apiGetFavoriteCourses(token)
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
    apiGetRecommendCourses(userId, limit, offset)
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
    apiUpdateProfile(token, data)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ open: true, status: 200, message: response.data.message });
        } else {
            setStatus({ open: true, status: response.status, message: response.data.message });
        }
    })
    .catch((error) => {
        setStatus({ open: true, status: 500, message: 'Error' });
    })
}

export const getCourseLikeStatus = (token, courseId, setStatus) => {
    apiGetCourseLikeStatus(token, courseId)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, status: response.data.likeStatus });
        } else {
            setStatus({ successful: false, status: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, status: false });
    })
}

export const changeAvatar = (token, formData, setStatus) => {
    apiChangeAvatar(token, formData)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ open: true, status: 200, message: response.data.message });
        } else {
            setStatus({ open: true, status: response.status, message: response.data.message });
        }
    })
    .catch((error) => {
        setStatus({ open: true, status: 500, message: 'Error' });
    })
}