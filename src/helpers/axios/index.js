import axios from "axios";
import store from "../../store/index"
import {getProfile} from "../../features/profile/profile";
import {saveLoginStatus} from "../../features/auth/auth";


export function interceptorInit() {
    axiosInit()
}

export function axiosInit() {
    axios.defaults.baseURL = 'http://localhost:5000';
    try {
        store.dispatch(getProfile({query: null}))

        store.dispatch(saveLoginStatus({fieldName: 'isLogin', value: true}))
        store.dispatch(saveLoginStatus({fieldName: 'isCheck', value: true}))
    } catch (e) {
        store.dispatch(saveLoginStatus({fieldName: 'isLogin', value: false}))
        store.dispatch(saveLoginStatus({fieldName: 'isCheck', value: true}))
    }
}
