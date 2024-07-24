import { SEARCH_TODO } from "../../redux/types"
import { STATUS_ALL } from '../../constants/Status'

const initState = {
    search: '',
    status: STATUS_ALL,
    priority: []
}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_TODO:
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default filterReducer