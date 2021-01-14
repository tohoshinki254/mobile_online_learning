import { apiGetAllCategory, apiGetCategoryDetails } from '../services/category-services';

export const getAllCategory = (setStatus) => {
    apiGetAllCategory()
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, list: response.data.payload });
        } else {
            setStatus({ successful: false, list: [] });
        }
    })
    .catch((error) => {
        setStatus({ successful: false });
    })
}

export const getCategoryDetails = (id, setStatus) => {
    apiGetCategoryDetails(id)
    .then((response) => {
        if (response.status === 200) {
            setStatus(response.data.payload);
        } else {
            console.log(response.data.message);
        }
    })
    .catch((error) => {
        console.log(error);
    })
}