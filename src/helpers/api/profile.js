import axios from "axios";
import {getQueriedUrl} from "../queryStringHelper";

export function getProfileQueryRequest({query}) {
    return axios.get(
        getQueriedUrl({
            url: '/Account/Profile',
            query: {
                ...query,
            },
        })
    )
}
