import React from "react";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import "./Auth.scss";
import { useNavigate } from "react-router-dom";

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

                <button
                    className="Auth__button"
                    onClick={() => SignInput()}
                    type="submit">
                    Авторизация
                </button>
            </form>
        </div>
    )
}