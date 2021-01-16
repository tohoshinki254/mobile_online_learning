import { apiBuyFreeCourse, apiGetPaymentInfo } from '../services/payment-services';

export const buyFreeCourse = (token, data, setState, setSnackbar, setModal) => {
    apiBuyFreeCourse(token, data)
    .then((response) => {
        if (response.status === 200) {
            setState({ successful: true, info: true });
            setModal(false);
        } else {
            setSnackbar({ open: true, status: response.status, message: response.data.message });
        }
    })
    .catch((error) => {
        setSnackbar({ open: true, status: 500, message: 'Error' });
    })
}

export const getPaymentInfo = (token, courseId, setStatus) => {
    apiGetPaymentInfo(token, courseId)
    .then((response) => {
        if (response.status === 200) {
            setStatus({ successful: true, info: response.data.didUserBuyCourse });
        } else {
            setStatus({ successful: false, info: null });
        }
    })
    .catch((error) => {
        setStatus({ successful: false, info: null });
    })
}