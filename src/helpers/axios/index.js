import axios from "axios";
import store from "../../store/index"
import {getProfile} from "../../features/auth/auth";


export async function interceptorInit() {
    await axiosInit()
}

export async function  axiosInit() {
    axios.defaults.baseURL = 'http://localhost:5000';
    try {
        await store.dispatch(getProfile({query: null}))
    } catch (e) {
        console.error(e)
    }
}
