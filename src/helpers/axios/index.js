import axios from "axios";


export function interceptorInit() {
    axiosInit()
}

export function axiosInit() {
    axios.defaults.baseURL = 'https://localhost:5001';
}
