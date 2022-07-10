import { useNavigate  } from "react-router-dom";
import {useSelector} from "react-redux";

function requireAuth({ children }) {
    let navigate = useNavigate();
    const loginStatus = useSelector((state) => state.auth.loginStatus)
    if (!loginStatus.isLogin || !loginStatus.isCheck) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return navigate("/", { replace: true });

    }

    return children;
}

export default requireAuth
