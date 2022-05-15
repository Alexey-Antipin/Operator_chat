import {useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import {Settings} from "../../../Repeat_components/MassiveSettings";
import "./index.scss";

export const ChatSet = () => {
	const [value, setValue] = useState("");
	const [phrase, setPhrase] = useState([]);
	const [theme, setTheme] = useState([]);
	const [underTheme, setUnderTheme] = useState([]);

	const FirebaseSettings = () => {
		const massive = firebase.database().ref(`/Settings`);
		massive.on("value", (snapshot) => {
			const data = snapshot.val();
			setPhrase(data.phrase);
			setTheme(data.theme);
			setUnderTheme(data.underTheme);
		});
	};

	useEffect(() => {
		FirebaseSettings();
	}, []);

	return (
		<div>
			<div className="Header__Text">Настройки диалогов</div>

			<div className="Array__Settings">
				<Settings
					cl={"cl"}
					cl_name={"cl_name"}
					cl_btn={"cl_btn"}
					cl_map={"cl_map"}
					cl_block={"cl_block"}
					cl_D_btn={"cl_D_btn"}
					Massive={phrase}
					w_name={"Готовые фразы"}
					w_btn={"Добавить еще"}
					wD_btn={"-"}
					group={"phrase"}
				/>

				<Settings
					cl={"cl"}
					cl_name={"cl_name"}
					cl_btn={"cl_btn"}
					cl_map={"cl_map"}
					cl_block={"cl_block"}
					cl_D_btn={"cl_D_btn"}
					Massive={theme}
					w_name={"Список тем"}
					w_btn={"Добавить еще"}
					wD_btn={"-"}
					group={"theme"}
				/>

				<Settings
					cl={"cl"}
					cl_name={"cl_name"}
					cl_btn={"cl_btn"}
					cl_map={"cl_map"}
					cl_block={"cl_block"}
					cl_D_btn={"cl_D_btn"}
					Massive={underTheme}
					w_name={"Список подтем"}
					w_btn={"Добавить еще"}
					wD_btn={"-"}
					group={"underTheme"}
				/>
			</div>

			<div className="Footer__Text">
				<div>Автоматическое приветствие:</div>
				<input
					className="Text__Input"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</div>
	);
};
