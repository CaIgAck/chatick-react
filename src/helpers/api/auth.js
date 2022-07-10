import axios from 'axios'
export function registrationQueryRequest({data}) {
    return axios.post('/Account/Registration',data)
}
export function loginQueryRequest({data}) {
    return axios.post('/Account/Login', data)
}

