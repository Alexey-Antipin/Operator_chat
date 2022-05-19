import {useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import {Settings} from "../../../Repeat_components/MassiveSettings/MassiveSettings";
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
					massive={phrase}
					name={"Готовые фразы"}
					group={"phrase"}
				/>

				<Settings massive={theme} name={"Список тем"} group={"theme"} />

				<Settings
					massive={underTheme}
					name={"Список подтем"}
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
