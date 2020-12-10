import axios from 'axios';
import { API_URL } from '../Global/constant';

export const getNewCourses = (limit, page, setStatus) => {
    axios.post(API_URL + 'course/top-new', {
        limit: limit,
        page: page
    }).then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, courses: response.data.payload });
        } else {
            setStatus({ successful: false });
        }
    }).catch((error) => {
        setStatus({ successful: false });
    })
}