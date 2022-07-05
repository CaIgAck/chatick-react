import '../Registration/Registration.scss'
import "../../../style/main.scss"
import FormInput from "../../FormFields/FormInput";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login, registration, saveAuthForm} from "../../../features/auth/auth";

function signIn() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth)
    const setLoginForm = ({fieldName, value}) => dispatch(saveAuthForm({fieldName, value}))
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
                        <div className="auntification-btn" onClick={() => dispatch(login({data: auth}))}>
                            <button className="btn">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signIn