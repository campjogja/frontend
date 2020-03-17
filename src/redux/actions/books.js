import Axios from 'axios';

const URL_STRING = "/api/v1/"

export const getAllBook = () => {
    return {
        type: 'GET_BOOK',
        payload: Axios.get(URL_STRING)
    }
}

export const postNewBook = (data) => {
    return {
        type: "POST_BOOK",
        payload: Axios.post(`${URL_STRING}addbook`, data)
    }
}