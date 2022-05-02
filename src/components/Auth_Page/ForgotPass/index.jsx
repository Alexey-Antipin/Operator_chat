import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

export const ForgotPass = () => {
	const [NewPass, setNewPass] = useState("");
	const dispatch = useDispatch();

	const ForgotPassword = () => {
		try {
			if (NewPass !== "") {
				dispatch({
					type: "FORGOT_PASS_USER",
					payload: NewPass,
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
		<div className="Form">
			<form onSubmit={(e) => e.preventDefault()}>
				{/* Забыли пароль */}
				<div className="Form__label__Pass">Забыли пароль</div>

				{/* Почта */}
				<div>
					<label className="Form__label" htmlFor="email">
						Почта
					</label>
					<input
						id="email"
						name="email"
						type="email"
						className="Form__input"
						onChange={(e) => setNewPass(e.target.value)}
						value={NewPass}
					/>
				</div>

				{/* Отправить ссылку для восстановления */}
				<button
					onClick={ForgotPassword}
					className="Form__buttonRecovery">
					Отправить ссылку для восстановления
				</button>

				<ToastContainer />

				{/*Войти , Регистрация */}
				<div className="Form__Container">
					<button className="Form__button__sign">
						<Link to="/Auth">Войти</Link>
					</button>

					<button className="Form__buttonRegistration">
						<Link to="/Login">Регистрация</Link>
					</button>
				</div>
			</form>
		</div>
	);
};
