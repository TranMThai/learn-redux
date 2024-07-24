import { createSelector } from "reselect"

export const todoListSelector = state => state.todoList
export const filterSelector = state => state.filter

export const filtedTodoList = createSelector(todoListSelector, filterSelector, (todoList, filter) => {
    return todoList
        .filter(todo => todo.name.toLowerCase().includes(filter.search.toLowerCase()))
        .filter(todo => filter.status === 'All'
            || (filter.status === 'Completed' && todo.completed)
            || (filter.status === 'Todo' && !todo.completed))
        .filter(todo => filter.priority.length ? filter.priority.includes(todo.priority) : true)
})
