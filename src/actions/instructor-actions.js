import { apiGetDetailInstructor, apiGetInstructors } from '../services/instructor-services';

export const getInstructors = (setStatus) => {
    apiGetInstructors()
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, list: response.data.payload });
        } else {
            setStatus({ successful: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}

export const getDetailInstructor = (id, setStatus) => {
    apiGetDetailInstructor(id)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, info: response.data.payload });
        } else {
            setStatus({ successful: false });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}