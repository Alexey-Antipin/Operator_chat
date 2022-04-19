import React from "react";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";

export const Auth = () => {

    const initialValues = {
        password: '',
        email: '',
    }

    const dispatch = useDispatch()

    const onSubmit = values => {
        dispatch({
            type: "AUTH_USER",
            payload: values,
        })
    }

    const validationSchema = Yup.object({
        password: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    const navigate = useNavigate()

    const SignInput = () => {
        setTimeout(() => {
            navigate("/")
        }, 5000);
    }

    const AuthTrue = useSelector((state) => state.reducer)

    return (
        <div className="Auth">
            <form onSubmit={formik.handleSubmit}>

                {/* Почта */}
                <div>
                    <label
                        className="Auth__label"
                        htmlFor="email">
                        Почта
                    </label>
                    <input
                        id="Auth_email"
                        name="email"
                        type="email"
                        className="Auth__input"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <>{formik.errors.email}</> : null}
                    {AuthTrue.AuthSuccessfulTrue ? <>Авторизация прошла успешно</> : <></>}
                    {AuthTrue.AuthSuccessfulFalse ? <>Не удалось авторизоваться</> : <></>}
                </div>

                {/* Пароль */}
                <div>
                    <label
                        className="Auth__label"
                        htmlFor="firstName">
                        Пароль
                    </label>
                    <input
                        id="Auth_password"
                        name="password"
                        type="password"
                        className="Auth__input"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <>{formik.errors.password}</> : null}
                </div>

                {/* Авторизация */}
                <div className="Auth__Button__Flex">
                    <button
                        className="Auth__Button"
                        onClick={() => SignInput()}
                        type="submit">
                        Авторизация
                    </button>
                </div>

                {/*Войти через VK, GOOGLE */}
                <div className="Auth__Container__Net">
                    <button
                        className="Auth__Button__VK">
                        <Link to="/Login"></Link>
                    </button>
                    <div>Войти через VK</div>

                    <button
                        className="Auth__Button__Google">
                        <Link to="/Forgotpass"></Link>
                    </button>
                    <div>Войти через Google</div>
                </div>

                {/*Войти , Регистрация */}
                <div className="Auth__Container">
                    <button
                        className="Auth__Button__Registration">
                        <Link to="/Login">Зарегистрироваться</Link>
                    </button>

                    <button
                        className="Auth__Button__ForgotPass">
                        <Link to="/Forgotpass">Забыли пароль?</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}