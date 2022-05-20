import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./index.scss";

export const Panel = () => {
	const answerOperator = [
		{id: 0, answer: ""},
		{id: 1, answer: "Привет"},
		{id: 2, answer: "Здравствуйте"},
		{id: 3, answer: "Помогу"},
		{id: 4, answer: "Ждите"},
		{id: 5, answer: "Ожидайте"},
	];

	const [textValue, SetTextValue] = useState("");
	const ValueList = (event) => {
		SetTextValue(event);
	};

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
						{answerOperator.map((option) => (
							<option value={option.answer} key={option.id}>
								{option.answer}
							</option>
						))}
					</select>
				</div>

				<Link to="/homePage/chatSet">
					<button className="option__button">Настройки</button>
				</Link>
			</div>
		</div>
	);
};
