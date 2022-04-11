import React from "react";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
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
            navigate("/Page") 
        }, 3000);
    }

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
                    {
                        formik.errors.email ?
                            <div>{formik.errors.email}</div> : null
                    }
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
                    {
                        formik.errors.password ?
                            <div>{formik.errors.password}</div> : null
                    }
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