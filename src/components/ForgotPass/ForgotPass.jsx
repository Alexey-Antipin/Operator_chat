import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPass.scss";

export const ForgotPass = () => {

    return (
        <div className="Form">
            <form onSubmit={(e) => e.preventDefault()}>

                {/* Забыли пароль */}
                <div className="Form__label__Pass">
                    Забыли пароль
                </div>

                {/* Почта */}
                <div>
                    <label
                        className="Form__label"
                        htmlFor="email">
                        Почта
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="Form__input"
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    />
                </div>

                {/* Отправить ссылку для восстановления */}
                <button
                    className="Form__buttonRecovery">
                    Отправить ссылку для восстановления
                </button>

                {/*Войти , Регистрация */}
                <div className="Form__Container">
                    <button
                        className="Form__button__sign">
                        <Link to="/Auth">Войти</Link>
                    </button>

                    <button
                        className="Form__buttonRegistration">
                        <Link to="/Login">Регистрация</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}