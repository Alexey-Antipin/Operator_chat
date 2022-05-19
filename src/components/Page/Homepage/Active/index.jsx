import "./index.scss";
import {useContext, useEffect, useState} from "react";
import {debounce} from "lodash";
import firebase from "firebase/compat/app";
import {MapUsers} from "../../../Repeat_components/MapUsers";
import {MapUserDialog} from "../Dialog";
import {themeContext} from "../../../../context";
import {useNavigate} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import {Panel} from "../Panel";

export const Active = () => {
	const [messages, setMessages] = useState([]);
	const [operatorMess, setOperatorMess] = useState();
	const [key, setKey] = useState("0");
	const {messUser, setMessUser, value} = useContext(themeContext);
	const navigate = useNavigate();

	const FirebaseMessage = debounce(() => {
		if (value) {
			const messageFirebase = firebase.database().ref("/TechSupport/");
			messageFirebase
				.orderByChild("ReqText")
				.startAt(value)
				.endAt(value + "\uf8ff")
				.on("child_added", (snapshot) => {
					const data = snapshot.val();
					console.log(data);
					setMessages([data]);
				});
		} else {
			firebase
				.database()
				.ref(`/TechSupport/${key}`)
				.orderByChild("ReqText")
				.once("value", (snapshot) => {
					const data = snapshot.val();
					const newKey = snapshot.key;
					setKey(Number(newKey) + 1);
					setMessages([...messages, data]);
					console.log("data", data);
				});
		}
	}, 300);

	useEffect(() => {
		FirebaseMessage();
	}, [value]);

	const Btn1Click = (index) => {
		const chatFirebase = firebase
			.database()
			.ref(`/TechSupport/${index}/task/mess/`);
		chatFirebase
			.once("value", (snapshot) => {
				const data = snapshot.val();
				setOperatorMess(data);
				navigate(`dialog/${index}`);
			})
			.then(() => {
				setMessUser(true);
			});
	};
	const Btn2Click = () => {};

	const MessageUsers = !messUser ? (
		<>
			<MapUsers
				FirebaseMessage={FirebaseMessage}
				Photo={FaUserAlt}
				massive={messages}
				Btn1Click={Btn1Click}
				Btn2Click={Btn2Click}
			/>
		</>
	) : (
		<div className="Panel__Footer">
			<MapUserDialog massive={operatorMess} />
			<Panel />
		</div>
	);

	return <>{MessageUsers}</>;
};
