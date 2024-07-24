import { ADD_TODO, SET_STATUS } from "../../redux/types"
import {
    PRIORITY_HIGH,
    PRIORITY_LOW,
    PRIORITY_MEDIUM
} from '../../constants/Priority'
const initState = [
    {
        id: 1,
        name: 'Learn JAVa',
        completed: false,
        priority: PRIORITY_HIGH
    },
    {
        id: 2,
        name: 'Learn React',
        completed: false,
        priority: PRIORITY_MEDIUM
    },
    {
        id: 3,
        name: 'Learn Redux',
        completed: false,
        priority: PRIORITY_LOW
    },
    {
        id: 4,
        name: 'Learn C',
        completed: true,
        priority: PRIORITY_LOW
    }
]

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case SET_STATUS: 
            return [
                ...state.map(todo => {
                    if(todo.id == action.payload) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            ]
        default:
            return state
    }
}

export default todoListReducer