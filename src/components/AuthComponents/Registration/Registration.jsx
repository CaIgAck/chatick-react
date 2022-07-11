import './Registration.scss'
import "../../../style/main.scss"
import FormInput from "../../FormFields/FormInput";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registration, saveAuthForm} from "../../../features/auth/auth";

function registrationForm() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.auth)
    const  setRegistrationForm = ({fieldName, value}) => dispatch(saveAuthForm({fieldName, value}))
    return (
        <div className="layout">
            <div className="content">
                <div className="auntification">
                    <div className="auntification-title">Регистрация</div>
                    <div className="auntification-form">
                        <FormInput label="Имя пользователя" type="input" handleChange={(e) => setRegistrationForm({fieldName:'name', value: e.target.value})}  />
                        <FormInput label="Пароль" type="password" handleChange={(e) => setRegistrationForm({fieldName:'password', value: e.target.value})} />
                        <div className="have-account">
                            <Link to="/">У вас уже есть аккаунт?</Link>
                        </div>
                        <div className="auntification-btn" onClick={() => dispatch(registration({data: auth}))}>
                            <button className="btn">Зарегестрироваться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default registrationForm
