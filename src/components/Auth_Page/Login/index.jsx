import React from "react";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "reactstrap";
import "./index.scss";

export const Login = () => {
	const initialValues = {
		password: "",
		email: "",
	};

	const dispatch = useDispatch();

	const onSubmit = (values) => {
		dispatch({
			type: "CREATE_USER",
			payload: values,
		});
	};

	const validationSchema = Yup.object({
		password: Yup.string()
			.required("Обязательно")
			.min(8, "Пароль слишком короткий — минимум 8 символов.")
			.max(20, "Пароль слишком длинный. Максимум 20 символов.")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
				"Должен быть один верхний регистр, один нижний регистр, одна цифра и один символ особого регистра."
			),

		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password")], "Пароли не совпадают")
			.required("Обязательно"),

		email: Yup.string()
			.email("Неверный формат электронной почты")
			.required("Обязательно"),
	});

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<div className="formik">
			<form onSubmit={formik.handleSubmit}>
				<div className="formik__text">Регистрация</div>

				<div>
					<label className="formik__label" htmlFor="email">
						Почта
					</label>
					<input
						id="email"
						name="email"
						type="email"
						className="formik__input"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					{formik.errors.email ? <>{formik.errors.email}</> : null}
				</div>

				<div>
					<label className="formik__label" htmlFor="password">
						Пароль
					</label>
					<input
						id="password"
						name="password"
						type="password"
						className="formik__input"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					{formik.errors.password ? (
						<div className="formik__error">
							{formik.errors.password}
						</div>
					) : null}
				</div>

				<div>
					<label className="formik__label" htmlFor="confirmPassword">
						Подтверждение пароля
					</label>
					<input
						id="confirmPassword"
						name="confirmPassword"
						type="confirmPassword"
						className="formik__input"
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
					/>
					{formik.errors.confirmPassword ? (
						<>{formik.errors.confirmPassword}</>
					) : null}
				</div>

				<div className="formik__button-flex">
					<Button
						color="primary"
						outline
						size="lg"
						className="formik__button"
						type="submit">
						Регистрация
					</Button>
				</div>

				<div className="formik__container">
					<Button
						color="success"
						outline
						size="lg"
						className="formik__button-sign">
						<Link to="/auth">Войти</Link>
					</Button>

					<Button
						color="danger"
						outline
						size="lg"
						className="formik__button-forgotPass">
						<Link to="/forgotPass">Забыли пароль?</Link>
					</Button>
				</div>
			</form>
		</div>
	);
};
