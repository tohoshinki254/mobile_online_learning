import { apiListExerciseLesson } from '../services/exercise-services';

export const getListExerciseLesson = (token, lessonId, setStatus) => {
    apiListExerciseLesson(token, lessonId)
    .then((response) => {
        if (response.status === 200) {
            setStatus(response.data.payload.exercises);
        }
    })
    .catch((error) => {
        console.log(error);
    })
}