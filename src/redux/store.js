import { configureStore } from "@reduxjs/toolkit"
import filterSlice from "../components/Filters/FilterSlice"
import todoListSlice from "../components/TodoList/TodoListSlice"



const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        todoList: todoListSlice.reducer  
    }
})

export default store