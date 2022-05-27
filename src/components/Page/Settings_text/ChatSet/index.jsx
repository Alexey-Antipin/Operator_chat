import {useContext, useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import {Settings} from "../../../Repeat_components/MassiveSettings";
import {useSelector} from "react-redux";
import {themeContext} from "../../../../context";
import "./index.scss";

export const ChatSet = () => {
	const [settingsMassive, setSettingsMassive] = useState([]);
	const {autoText, setAutoText} = useContext(themeContext);
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
	}, [settingsMassive]);

	return (
		<>
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
					value={autoText}
					onChange={(e) => setAutoText(e.target.value)}
				/>
			</div>
		</>
	);
};
