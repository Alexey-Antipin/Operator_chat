import React, {useEffect, useState} from "react";
import {debounce} from "lodash";
import firebase from "firebase/compat/app";
import {ChatSet} from "../../Settings_text/ChatSet";
import {Profile} from "../../Settings_text/Profile";
import {useSelector} from "react-redux";
import Modal from "react-modal";
import "./index.scss";

export const Panel = ({indexUser}) => {
	const [keyIndexMess, setKeyIndexMess] = useState(null);
	const [answerOperator, setAnswerOperator] = useState([]);
	const [modalIsOpen, setIsOpen] = useState(false);
	const operatorId = useSelector((state) => state.reducer);

	const firebaseAnswerOperator = () => {
		firebase
			.database()
			.ref(`/Profile/`)
			.orderByChild("operatorId")
			.equalTo(operatorId.userEmail)
			.on("child_added", (snapshot) => {
				const data = snapshot.val().settings.theme;
				setAnswerOperator(data);
			});
	};

	const [textValue, SetTextValue] = useState("");

	const ValueList = (event) => {
		SetTextValue(event);
	};

	const handleKeyPress = debounce((e) => {
		if (e.key === "Enter") {
			firebase
				.database()
				.ref(`/TechSupport/${indexUser}/message/${keyIndexMess}`)
				.set({content: "Hallo", timestamp: "2022", writtenBy: "Alex"});
		}
	}, 500);

	const lengthMassive = debounce(() => {
		firebase
			.database()
			.ref(`/TechSupport/${indexUser}/`)
			.orderByChild("message")
			.on("value", (snapshot) => {
				const data = snapshot.val();
				const key = data.message.length;
				setKeyIndexMess(key);
			});
	}, 500);

	useEffect(() => {
		firebaseAnswerOperator();
		lengthMassive();
	}, []);

	Modal.setAppElement("#root");

	return (
		<div className="form">
			<form
				className="form__block"
				onClick={(e) => {
					e.preventDefault();
				}}>
				<div className="answer">
					<div className="answer__text">Введите ответ:</div>
					<textarea
						className="answer__textarea"
						value={textValue}
						onKeyDown={(e) => handleKeyPress(e)}
						onChange={(e) => SetTextValue(e.target.value)}
					/>
				</div>
			</form>

			<div className="option">
				<div>
					<div className="option__text">Или выберите из готовых:</div>
					<select
						className="option__select"
						onChange={(event) => ValueList(event.target.value)}>
						<option selected="" />
						{answerOperator.map((theme, index) => (
							<option value={theme} key={index}>
								{theme}
							</option>
						))}
					</select>
				</div>

				<button
					className="option__button"
					onClick={() => setIsOpen(true)}>
					Настройки
				</button>

				<Modal
					isOpen={modalIsOpen}
					onRequestClose={() => setIsOpen(true)}
					shouldCloseOnOverlayClick={false}>
					<button
						className="modal__button"
						onClick={() => setIsOpen(false)}>
						close
					</button>
					<Profile />
					<ChatSet />
				</Modal>
			</div>
		</div>
	);
};
