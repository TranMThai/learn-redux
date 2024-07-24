import { createSlice } from "@reduxjs/toolkit";
import { STATUS_ALL } from '../../constants/Status'

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: STATUS_ALL,
        priority: []
    },
    reducers: {
        search: (state, action) => {
            return {
                ...state, ...action.payload
            }
        }
    }
})

export default filterSlice