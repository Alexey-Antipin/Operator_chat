import React from "react";
import * as Yup from "yup";
import { useFormik } from 'formik';
import "./Login.scss";

export const Login = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
    }

    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
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

                {/* Имя */}
                <div>
                    <label
                        className="Formik__label"
                        htmlFor="firstName">
                        Имя
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="Formik__input"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {
                        formik.errors.firstName ?
                            <div>{formik.errors.firstName}</div> : null
                    }
                </div>

                {/* Фамилия */}
                <div>
                    <label
                        className="Formik__label"
                        htmlFor="lastName">
                        Фамилия
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="Formik__input"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {
                        formik.errors.lastName ?
                            <div>{formik.errors.lastName}</div> : null
                    }
                </div>

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
                    {
                        formik.errors.email ?
                            <div>{formik.errors.email}</div> : null
                    }
                </div>

                <button
                    className="Formik__button"
                    type="submit">
                    Отправить
                </button>
            </form>
        </div>
    )
}