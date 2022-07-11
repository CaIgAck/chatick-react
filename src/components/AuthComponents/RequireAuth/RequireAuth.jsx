import { useNavigate  } from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function requireAuth({ children }) {
    let navigate = useNavigate();
    const [loaded, setLoaded] = useState(false)
    const loginStatus = useSelector((state) => state.auth.loginStatus)
    console.log(loginStatus)
    useEffect(() => {
        if(loaded) return
        if (!loginStatus.isLogin || !loginStatus.isCheck) {
            return navigate("/", { replace: true });
        }
        else {
            return navigate("/messages", { replace: true });
        }
    }, [loaded])
    return children
}

export default requireAuth
