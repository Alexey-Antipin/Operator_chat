import React from "react";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import "./Login.scss";

export const Login = () => {

    const initialValues = {
        password: '',
        email: '',
    }

    const dispatch = useDispatch()

    const onSubmit = values => {
        dispatch({
            type: "CREATE_USER",
            payload: values
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

    return (
        <div className="Formik">
            <form onSubmit={formik.handleSubmit}>

                {/* Почта */}
                <div>
                    <label
                        className="Formik__label"
                        htmlFor="email">
                        Почта
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="Formik__input"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <>{formik.errors.email}</> : null}
                </div>

                {/* Пароль */}
                <div>
                    <label
                        className="Formik__label"
                        htmlFor="password">
                        Пароль
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="Formik__input"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <>{formik.errors.password}</> : null}
                </div>

                {/* Подтверждение пароля */}
                <div>
                    <label
                        className="Formik__label"
                        htmlFor="password">
                        Подтверждение пароля
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="Formik__input"
                    // onChange={formik.handleChange}
                    // value={formik.values.password}
                    />
                </div>

                {/* Регистрация */}
                <div className="Formik__button__flex">
                    <button
                        className="Formik__button"
                        type="submit">
                        Регистрация
                    </button>
                </div>

                {/*Войти , забыли пароль ? */}
                <div className="Formik__Container">
                    <button
                        className="Formik__button__sign">
                        <Link to="/Auth">Войти</Link>
                    </button>

                    <button
                        className="Formik__button__ForgotPass">
                        <Link to="/ForgotPass">Забыли пароль?</Link>
                    </button>
                </div>
            </form>
        </div>
    )
}