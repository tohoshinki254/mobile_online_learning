import { apiGetTopNew, 
    apiGetTopSell, 
    apiGetTopRate, 
    apiGetDetailWithLesson, 
    apiGetCourseInfo, 
    apiGetCourseFollowFavoriteCategories, 
    apiSearch, 
    apiSearchV2, 
    apiSearchHistory, 
    apiDeleteSearchHistory, 
    apiGetCourseDetails, 
    apiPostRatingCourse 
} from '../services/course-services';

export const getNewCourses = (limit, page, setStatus) => {
    apiGetTopNew(limit, page)
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

export const getDetailWithLesson = (token, courseId, setStatus) => {
    apiGetDetailWithLesson(token, courseId)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, details: response.data.payload });
            
        } else {
            setStatus({ successful: false })
            
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}

export const getCourseInfo = (token, id, setStatus) => {
    apiGetCourseInfo(token, id)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, details: response.data.payload });
        } else {
            setStatus({ successful: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}

export const getTopSell = (data, setStatus) => {
    apiGetTopSell(data)
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

export const getTopRate = (data, setStatus) => {
    apiGetTopRate(data)
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

export const getCourseFollowFavoriteCategories = (data, setStatus) => {
    apiGetCourseFollowFavoriteCategories(data)
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

export const search = (data, setStatus) => {
    apiSearch(data)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, info: response.data.payload.rows });
        } else {
            setStatus({ successful: false, info: null });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, info: null });
    })
}

export const searchV2 = (keyword, setStatus) => {
    apiSearchV2(keyword)
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

export const searchHistory = (token, setStatus) => {
    apiSearchHistory(token)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, data: response.data.payload.data });
        } else {
            setStatus({ successful: false, data: [] });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, data: [] });
    })
}

export const deleteSearchHistory = (token, id) => {
    apiDeleteSearchHistory(token, id)
    .then((response) => {
        // console.log(response.data.message);
    })
    .catch((error) => {
        // console.log('Error');
    })
}

// userId random
export const getCourseDetails = (id, setStatus) => {
    apiGetCourseDetails(id)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, details: response.data.payload });
        } else {
            setStatus({ successful: false, details: null });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, info: null });
    })
}

export const postRatingCourse = (token, data, setStatus) => {
    apiPostRatingCourse(token, data)
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