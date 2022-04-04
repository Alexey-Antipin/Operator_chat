import React from "react";
import { useFormik } from 'formik';
import "./Login.scss";

export const Login = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
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