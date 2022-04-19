import React from "react";
import { Link } from "react-router-dom";
import "./UpdatePass.scss";

export const UpdatePass = () => {

    return (
        <div className="Update">
            <form onSubmit={(e) => e.preventDefault()}>

                {/* Обновить пароль */}
                <div className="Update__label__Pass">
                    Обновить пароль
                </div>

                {/* Пароль */}
                <div>
                    <div className="Update__TextPass">Пароль</div>
                    <input
                        className="Update__Pass" />
                </div>

                {/* Подтверждение пароля */}
                <div>
                    <div className="Update__TextPass">Подтверждение пароля</div>
                    <input
                        className="Update__Pass" />
                </div>

                {/* Отправить ссылку для восстановления */}
                <button
                    className="Update__buttonRecovery">
                    Отправить ссылку для восстановления
                </button>

                {/*Войти , Регистрация */}
                <div className="Update__Container">
                    <button
                        className="Update__button__sign">
                        <Link to="/Auth">Войти</Link>
                    </button>

                    <button
                        className="Update__buttonRegistration">
                        <Link to="/Login">Регистрация</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}