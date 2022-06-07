import React from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {FaVk, FaGoogle} from "react-icons/fa";
import "./index.scss";

export const Auth = () => {
	const initialValues = {
		password: "",
		email: "",
	};

	const dispatch = useDispatch();

	const onSubmit = (values) => {
		try {
			dispatch({
				type: "AUTH_USER",
				payload: values,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const validationSchema = Yup.object({
		password: Yup.string().required("Обязательно"),
		email: Yup.string()
			.email("Неверный формат электронной почты")
			.required("Обязательно"),
	});

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	const navigate = useNavigate();

	const SignInput = () => {
		setTimeout(() => {
			navigate("/homePage");
		}, 2000);
	};

	const authTrue = useSelector((state) => state.reducer);

	return (
		<div className="auth">
			<form onSubmit={formik.handleSubmit}>
				<div className="auth__text">Авторизация</div>

				<div>
					<label className="auth__label" htmlFor="email">
						Почта
					</label>
					<input
						id="auth_email"
						name="email"
						type="email"
						className="auth__input"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					{formik.errors.email ? <>{formik.errors.email}</> : null}
					{authTrue.authSuccessfulTrue ? (
						<>Авторизация прошла успешно</>
					) : (
						<></>
					)}
					{authTrue.authSuccessfulFalse ? (
						<>Не удалось авторизоваться</>
					) : (
						<></>
					)}
				</div>

				<div>
					<label className="auth__label" htmlFor="firstName">
						Пароль
					</label>
					<input
						id="auth_password"
						name="password"
						type="password"
						className="auth__input"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
				</div>

				<div className="auth__button-flex">
					<button
						className="auth__button"
						onClick={() => SignInput()}
						type="submit">
						Авторизация
					</button>
				</div>

				<div className="auth__container-net">
					<div className="auth__center">
						<button className="auth__button-vk">
							<Link to="/login">
								<FaVk />
							</Link>
						</button>
						<div>Войти через VK</div>
					</div>

					<div className="auth__center">
						<button className="auth__button-google">
							<Link to="/forgotpass">
								<FaGoogle />
							</Link>
						</button>
						<div>Войти через Google</div>
					</div>
				</div>

				<div className="auth__container">
					<button className="auth__button-registration">
						<Link to="/login">Зарегистрироваться</Link>
					</button>

					<button className="auth__button-forgotPass">
						<Link to="/forgotpass">Забыли пароль?</Link>
					</button>
				</div>
			</form>
		</div>
	);
};
