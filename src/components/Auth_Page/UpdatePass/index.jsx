import React from "react";
import {ToastContainer} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useSearchParams} from "react-router-dom";
import {Button} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

export const UpdatePass = () => {
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();
	const oobCode = searchParams.get("oobCode");

	const TransitionOnAuth = () => {
		setTimeout(() => {
			navigate("/Auth");
		}, 3000);
	};

	const initialValues = {
		newPassword: "",
		repeatPassword: "",
	};

	const dispatch = useDispatch();

	const onSubmit = (values) => {
		dispatch({
			type: "UPDATE_PASSWORD",
			payload: {newPassword: values.newPassword, oobCode},
		});
	};

	const validationSchema = Yup.object({
		newPassword: Yup.string().required("Обязательно"),
		repeatPassword: Yup.string()
			.oneOf([Yup.ref("New_password")], "Пароли не совпадают")
			.required("Обязательно"),
	});

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<div className="update">
			<form onSubmit={formik.handleSubmit}>
				<div className="update__label-pass">Обновить пароль</div>

				<div>
					<div className="update__pass">Пароль</div>
					<input
						id="newPassword"
						name="newPassword"
						type="password"
						className="update__pass"
						onChange={formik.handleChange}
						value={formik.values.newPassword}
					/>
					{formik.errors.newPassword ? (
						<>{formik.errors.newPassword}</>
					) : null}
				</div>

				<div>
					<div className="update__pass-confirm">
						Подтверждение пароля
					</div>
					<input
						id="repeatPassword"
						name="repeatPassword"
						type="password"
						className="update__pass"
						onChange={formik.handleChange}
						value={formik.values.repeatPassword}
					/>
					{formik.errors.repeatPassword ? (
						<>{formik.errors.repeatPassword}</>
					) : null}
				</div>

				<Button
					type="submit"
					color="success"
					outline
					className="update__button-recovery"
					onClick={() => TransitionOnAuth()}>
					Отправить ссылку для восстановления
				</Button>

				<ToastContainer />

				<div className="update__container">
					<Button
						color="info"
						outline
						className="update__button-sign">
						<Link to="/auth">Войти</Link>
					</Button>

					<Button
						color="info"
						outline
						className="update__button-registration">
						<Link to="/login">Регистрация</Link>
					</Button>
				</div>
			</form>
		</div>
	);
};
