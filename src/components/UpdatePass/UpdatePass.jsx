import React from "react";
import { ToastContainer } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import "./UpdatePass.scss";

export const UpdatePass = () => {

    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams();

    const oobCode = searchParams.get('oobCode')

    const FormPassNew = useSelector((state) => state.reducer.FormPassNew)

    const TransitionOnAuth = () => {
        if (FormPassNew == true) {
            setTimeout(() => {
                navigate("/Auth")
            }, 3000);
        }
    }


    const initialValues = {
        New_password: '',
        Repeat_password: '',
    }

    const dispatch = useDispatch()

    const onSubmit = values => {

        dispatch({
            type: "UPDATE_PASSWORD",
            payload: { values, oobCode },
        })
    }

    const validationSchema = Yup.object({
        New_password: Yup.string().required('Обязательно'),
        Repeat_password: Yup.string().oneOf([Yup.ref("New_password")],
            "Пароли не совпадают").required('Обязательно')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <div className="Update">
            <form onSubmit={formik.handleSubmit}>

                {/* Обновить пароль */}
                <div className="Update__label__Pass">
                    Обновить пароль
                </div>

                {/* Пароль */}
                <div>
                    <div className="Update__TextPass">Пароль</div>
                    <input
                        id="New_password"
                        name="New_password"
                        type="password"
                        className="Update__Pass"
                        onChange={formik.handleChange}
                        value={formik.values.New_password}
                    />
                    {formik.errors.New_password ? <>{formik.errors.New_password}</> : null}
                </div>

                {/* Подтверждение пароля */}
                <div>
                    <div className="Update__TextPass">Подтверждение пароля</div>
                    <input
                        id="Repeat_password"
                        name="Repeat_password"
                        type="password"
                        className="Update__Pass"
                        onChange={formik.handleChange}
                        value={formik.values.Repeat_password}
                    />
                    {formik.errors.Repeat_password ? <>{formik.errors.Repeat_password}</> : null}
                </div>

                {/* Отправить ссылку для восстановления */}
                <Button
                    type="submit"
                    color="success"
                    outline
                    className="Update__buttonRecovery"
                    onClick={() => TransitionOnAuth()}>
                    Отправить ссылку для восстановления
                </Button >

                <ToastContainer />

                {/*Войти , Регистрация */}
                <div className="Update__Container">
                    <Button
                        color="info"
                        outline
                        className="Update__button__sign">
                        <Link to="/Auth">Войти</Link>
                    </Button>

                    <Button
                        color="info"
                        outline
                        className="Update__buttonRegistration">
                        <Link to="/Login">Регистрация</Link>
                    </Button>
                </div>
            </form>
        </div>
    )
}