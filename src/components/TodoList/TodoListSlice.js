import { createSlice } from "@reduxjs/toolkit";
import {
    PRIORITY_HIGH,
    PRIORITY_LOW,
    PRIORITY_MEDIUM
} from '../../constants/Priority'


const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
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
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        setStatus: (state, action) => {
            state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
            })
        }
    }
})

export default todoListSlice