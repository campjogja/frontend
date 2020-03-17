const initialValue = {
    bookData: [],
    errMsg: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false
};

const bookReducer = (state = initialValue, action) => {
    switch (action.type){
        case "GET_BOOK_PENDING":
            return{
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "GET_BOOK_REJECTED":
            return{
                ...state,
                isPending: false,
                isRejected: true,
                errMsg: action.payload.data
            }
        case "GET_BOOK_FULFILLED":
            return{
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: action.payload.data.result
            }
            case "POST_BOOK_PENDING":
                return{
                    ...state,
                    isPending: true,
                    isRejected: false,
                    isFulfilled: false
                }
            case "POST_BOOK_REJECTED":
                return {
                    ...state,
                    isPending: false,
                    isRejected: true,
                    errMsg: action.payload.data
                }
            case "POST_BOOK_FULFILLED":
                state.bookData.push(JSON.parse(action.payload.config.data))
                return{
                    ...state,
                    isPending: false,
                    isFulfilled: true,
                    bookData: state.bookData
                }
        default:
            return state;
    }
}

export default bookReducer
