import {useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import {Settings} from "../../../Repeat_components/MassiveSettings";
import {useSelector} from "react-redux";
import "./index.scss";

export const ChatSet = () => {
	const [value, setValue] = useState("");
	const [settingsMassive, setSettingsMassive] = useState([]);
	const operatorId = useSelector((state) => state.reducer);

	const firebaseSettings = () => {
		firebase
			.database()
			.ref(`/Profile/`)
			.orderByChild("operatorId")
			.equalTo(operatorId.userEmail)
			.on("child_added", (snapshot) => {
				const data = snapshot.val().settings;
				setSettingsMassive(data);
			});
	};

	useEffect(() => {
		firebaseSettings();
	}, []);

	return (
		<div>
			<div className="text">Настройки диалогов</div>

			<div className="array__settings">
				<Settings
					massive={settingsMassive.phrase}
					name={"Готовые фразы"}
					group={"phrase"}
				/>

				<Settings
					massive={settingsMassive.theme}
					name={"Список тем"}
					group={"theme"}
				/>

				<Settings
					massive={settingsMassive.underTheme}
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
