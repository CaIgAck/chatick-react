import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {loginQueryRequest, registrationQueryRequest} from "../../helpers/api/auth";

export const registration = createAsyncThunk(
    'auth/registration',
    async function({data}, {rejectWithValue}) {
        try {
            return (await registrationQueryRequest({data})).data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async function({data}, {rejectWithValue}) {
        try {
            return (await loginQueryRequest({data})).data
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

const initialState = {
    auth: {
        name: null,
        password: null
    },
    error: null,
    status: null
}

export const auntification = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveAuthForm: (state, payload) => {
            state.auth[payload.payload.fieldName] = payload.payload.value
        }
    },
    extraReducers: {
        [registration.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [registration.rejected]: (state, error) => {
            state.status = 'rejected'
            state.error = error
        },
        [registration.fulfilled]: (state) => {
            state.status = 'resolved'
            state.error = null
        },
        [login.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [login.rejected]: (state, error) => {
            state.status = 'rejected'
            state.error = error
        },
        [login.fulfilled]: (state) => {
            state.status = 'resolved'
            state.error = null
        },
    }
})


export const { saveAuthForm } = auntification.actions


export default auntification.reducer