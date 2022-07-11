import '../Registration/Registration.scss'
import "../../../style/main.scss"
import FormInput from "../../FormFields/FormInput";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login, saveAuthForm} from "../../../features/auth/auth";
function signIn() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.auth)
    const setLoginForm = ({fieldName, value}) => dispatch(saveAuthForm({fieldName, value}))
    const loginHandle = () => {
        dispatch(login({data: auth})).then(() => {
            navigate("messages")
        })
    }
    return (
        <div className="layout">
            <div className="content">
                <div className="auntification">
                    <div className="auntification-title">Вход</div>
                    <div className="auntification-form">
                        <FormInput type="input" label="Имя пользователя" handleChange={(e) => setLoginForm({fieldName:'name', value: e.target.value})} />
                        <FormInput label="Пароль" type="password" handleChange={(e) => setLoginForm({fieldName:'password', value: e.target.value})} />
                        <div className="have-account">
                            <Link to="/registration">Нет аккаунта?</Link>
                        </div>
                        <div className="auntification-btn" onClick={() => loginHandle()}>
                            <button className="btn">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signIn
