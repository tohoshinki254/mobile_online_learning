import axios from 'axios';
import { API_URL } from '../Global/constant';

export const apiListExerciseLesson = (token, lessonId) => {
    return axios.post(API_URL + 'exercise/student/list-exercise-lesson', {
        lessonId: lessonId
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}