import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {loginQueryRequest, registrationQueryRequest} from "../../helpers/api/auth";
import {getProfileQueryRequest} from "../../helpers/api/profile";

export const registration = createAsyncThunk(
    'auth/registration',
    async function({data}, {rejectWithValue}) {
        try {
            return (await registrationQueryRequest({data})).data
        } catch (e) {
            return  rejectWithValue(e)
        }
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async function({data}, {rejectWithValue}) {
        try {
            return (await loginQueryRequest({data})).data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)
export const getProfile = createAsyncThunk(
    'auth/getProfile',
    async function({query}, {rejectWithValue}) {
        try {
            return (await getProfileQueryRequest({query})).data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const initialState = {
    auth: {
        name: null,
        password: null
    },
    error: null,
    status: null,
    loginStatus: {
        isLogin: false,
        isCheck: false
    },
    profile: null
}

const saveLoginStatus = (state, {isLogin, isCheck}) => {
    state.loginStatus.isLogin = isLogin
    state.loginStatus.isCheck = isCheck
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
            saveLoginStatus(state, {isLogin: true, isCheck: true})
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
            saveLoginStatus(state, {isLogin: true, isCheck: true})
        },

        [getProfile.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getProfile.rejected]: (state, error) => {
            state.status = 'rejected'
            state.error = error
            saveLoginStatus(state, {isLogin: false, isCheck: true})
        },
        [getProfile.fulfilled]: (state, payload) => {
            state.status = 'resolved'
            state.error = null
            state.profile = payload.payload.value
            saveLoginStatus(state, {isLogin: true, isCheck: true})
        }
    }
})


export const { saveAuthForm } = auntification.actions


export default auntification.reducer