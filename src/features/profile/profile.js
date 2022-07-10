import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getProfileQueryRequest} from "../../helpers/api/profile";

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async function({query}) {
        return (await getProfileQueryRequest({query})).data
    }
)

const initialState = {
    profile: null,
    error: null,
    status: null
}

export const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getProfile.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getProfile.rejected]: (state, error) => {
            state.status = 'rejected'
            state.error = error
        },
        [getProfile.fulfilled]: (state, payload) => {
            state.status = 'resolved'
            state.error = null
            state.profile = payload.payload.value
        }
    }
})

export default profile.reducer