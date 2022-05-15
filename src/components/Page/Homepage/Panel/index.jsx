import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./index.scss";

export const Panel = () => {
	const AnswerOperator = [
		{id: 0, answer: ""},
		{id: 1, answer: "Привет"},
		{id: 2, answer: "Здравствуйте"},
		{id: 3, answer: "Помогу"},
		{id: 4, answer: "Ждите"},
		{id: 5, answer: "Ожидайте"},
	];

	const [TextValue, SetTextValue] = useState("");
	const ValueList = (event) => {
		SetTextValue(event);
	};

	return (
		<div className="Form">
			<form
				className="Form__Block"
				onClick={(e) => {
					e.preventDefault();
				}}>
				<div className="Block__TextArea">
					<div className="Block__Text">Введите ответ:</div>
					<textarea
						className="Block__Area"
						value={TextValue}
						onChange={(e) => SetTextValue(e.target.value)}
					/>
				</div>
			</form>

			<div className="Block">
				<div>
					<div className="Block__Text">Или выберите из готовых:</div>
					<select
						className="Select"
						onChange={(event) => ValueList(event.target.value)}>
						{AnswerOperator.map((option) => (
							<option value={option.answer} key={option.id}>
								{option.answer}
							</option>
						))}
					</select>
				</div>

				<Link to="/HomePage/ChatSet">
					<button className="Block__Button">Настройки</button>
				</Link>
			</div>
		</div>
	);
};
