const initialState = {
    news: []
}

export default function newsReducer(state = initialState, action) {
    console.log(state);
    console.log(action)
    switch (action.type) {
        case 'FETCH_NEWS': {
            return {
                ...state,
                news: state.news.concat(action.payload)
            }
        }
        case 'ADD_NEWS': {
            return {
                ...state,
                news: state.news.concat(action.payload)
            }
        }
        default:
            return state
    }
}