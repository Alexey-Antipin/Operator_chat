import "./index.scss";
import {useContext, useEffect, useState} from "react";
import {debounce} from "lodash";
import firebase from "firebase/compat/app";
import {Field} from "../../../Repeat_components/Field";
import {MapUser} from "../../../Repeat_components/MapUser";
import {ThemeContext} from "../../../../context";
import {FaUserAlt} from "react-icons/fa";

export const Active = () => {
	const [Messages, setMessages] = useState();

	const {value} = useContext(ThemeContext);

	const FirebaseMessage = debounce(() => {
		if (value) {
			const Message = firebase.database().ref("/TechSupport");
			Message.orderByChild("Request_Text")
				.startAt(value)
				.endAt(value + "\uf8ff")
				.on("child_added", (snapshot) => {
					const data = snapshot.val();
					setMessages([data]);
				});
		} else {
			const Message = firebase.database().ref("/TechSupport");
			Message.once("value", (snapshot) => {
				const data = snapshot.val();
				setMessages(data);
			});
		}
	}, 500);

	useEffect(() => {
		FirebaseMessage();
	}, [value]);

	// const FilterSearch = Messages?.filter((event) => {
	// 	return event.content.includes(value) || event.writtenBy.includes(value);
	// });

	const MessageUsers = (
		<MapUser
			ScrollBar={"ScrollBar"}
			BlockMap={"BlockMap"}
			BlockPhoto={"BlockPhoto"}
			CPhoto={"CPhoto"}
			Photo={FaUserAlt}
			CRequest_Text={"CRequest_Text"}
			Massive={Messages}
			BlockButton={"BlockButton"}
			ButtonW1={"Продолжить"}
			ButtonW2={"Сохранить"}
			TimeMiss={"Пока нету"}
			b1={"b1"}
			b2={"b2"}
			b3={"b3"}
		/>
	);

	return <Field ClassField={"FieldActive"} Children={<>{MessageUsers}</>} />;
};
