import "./index.scss";
import {useContext, useEffect, useState} from "react";
import {debounce} from "lodash";
import firebase from "firebase/compat/app";
import {MapUsers} from "../../../Repeat_components/MapUsers";
import {MapUserDialog} from "../Dialog";
import {ThemeContext} from "../../../../context";
import {useNavigate} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import {Panel} from "../Panel";

export const Active = () => {
	const [Messages, setMessages] = useState();
	const [OperatorMess, setOperatorMess] = useState();
	const {MessUser, setMessUser, value} = useContext(ThemeContext);
	const navigate = useNavigate();

	const FirebaseMessage = debounce(() => {
		if (value) {
			const Message = firebase.database().ref("/TechSupport/");
			Message.orderByChild("ReqText")
				.startAt(value)
				.endAt(value + "\uf8ff")
				.on("child_added", (snapshot) => {
					const data = snapshot.val();
					console.log(data);
					setMessages([data]);
				});
		} else {
			const Message = firebase
				.database()
				.ref(`/TechSupport`)
				.limitToFirst(5);
			Message.orderByChild("task").on("value", (snapshot) => {
				const data = snapshot.val();
				setMessages(data);
				console.log([data]);
			});
		}
	}, 300);

	useEffect(() => {
		FirebaseMessage();
	}, [value]);

	// const FilterSearch = Messages?.filter((event) => {
	// 	return event.content.includes(value) || event.writtenBy.includes(value);
	// });

	const Btn1Click = (index) => {
		console.log("data", index);
		const Message = firebase
			.database()
			.ref(`/TechSupport/${index}/task/mess/`);
		Message.once("value", (snapshot) => {
			const data = snapshot.val();
			setOperatorMess(data);
			navigate(`dialog/${index}`);
		}).then(() => {
			setMessUser(true);
		});
	};
	const Btn2Click = () => {};

	const MessageUsers = !MessUser ? (
		<>
			<MapUsers
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
				Btn1Click={Btn1Click}
				Btn2Click={Btn2Click}
			/>
		</>
	) : (
		<div className="Panel__Footer">
			<MapUserDialog Massive={OperatorMess} />
			<Panel />
		</div>
	);

	return <>{MessageUsers}</>;
};
