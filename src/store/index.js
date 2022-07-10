import { configureStore } from '@reduxjs/toolkit'
import auth from "../features/auth/auth";
import profile from "../features/profile/profile";
export default configureStore({
    reducer: {auth, profile},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
