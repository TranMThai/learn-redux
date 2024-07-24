import { combineReducers } from 'redux'
import filterReducer from '../components/Filters/FilterSlice'
import todoListReducer from '../components/TodoList/TodoListSlice'

const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: todoListReducer
})

export default rootReducer