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
			<div className="text">Настройки диалогов</div>

			<div className="array__settings">
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

			<div className="block__text">
				<div>Автоматическое приветствие:</div>
				<input
					className="text__input"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</div>
	);
};
