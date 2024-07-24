import { ADD_TODO, SEARCH_TODO, SET_STATUS } from "./types";

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const search = (data) => {
    return {
        type: SEARCH_TODO,
        payload: data
    }
}

export const setStatus = (id) => {
    return {
        type: SET_STATUS,
        payload: id
    }
}