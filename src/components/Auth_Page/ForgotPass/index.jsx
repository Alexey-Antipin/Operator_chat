import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

export const ForgotPass = () => {
	const [newPass, setNewPass] = useState("");
	const dispatch = useDispatch();

	const ForgotPassword = () => {
		try {
			if (newPass !== "") {
				dispatch({
					type: "FORGOT_PASS_USER",
					payload: newPass,
				});
			}
		} catch (error) {
			toast.error(`🦄 It's don't work!`, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	return (
		<div className="form">
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="form__label-pass">Забыли пароль</div>

				<div>
					<label className="form__label" htmlFor="email">
						Почта
					</label>
					<input
						id="email"
						name="email"
						type="email"
						className="form__input"
						onChange={(e) => setNewPass(e.target.value)}
						value={newPass}
					/>
				</div>

				<button
					onClick={ForgotPassword}
					className="form__button-recovery">
					Отправить ссылку для восстановления
				</button>

				<ToastContainer />

				<div className="form__container">
					<button className="form__button-sign">
						<Link to="/auth">Войти</Link>
					</button>

					<button className="form__button-registration">
						<Link to="/login">Регистрация</Link>
					</button>
				</div>
			</form>
		</div>
	);
};
