const initialState = {
    country: 'ru',
    page:1
}

export default function criteriaReducer(state = initialState, action) {

    switch (action.type) {
        case 'CHANGE_CRITERIA': {
            return {
                ...state,
                country: state.country,
                page: state.page + 1
            }
        }

        default:
            return state
    }
}