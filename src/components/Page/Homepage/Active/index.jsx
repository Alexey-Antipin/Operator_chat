import "./index.scss";
import {useContext, useEffect, useState} from "react";
import {debounce} from "lodash";
import firebase from "firebase/compat/app";
import {MapUsers} from "../../../Repeat_components/MapUsers";
import {MapUserDialog} from "../Dialog";
import {themeContext} from "../../../../context";
import {useNavigate} from "react-router-dom";
import {Panel} from "../Panel";
import {useSelector} from "react-redux";

export const Active = () => {
	const [messages, setMessages] = useState([]);
	const [indexUser, setIndexUser] = useState([]);
	const [filterMess, setFilterMess] = useState();
	const [hasMore, setHasMore] = useState(false);
	const [counter, setCounter] = useState(null);
	const {messUser, setMessUser, value} = useContext(themeContext);
	const authTrue = useSelector((state) => state.reducer);
	const navigate = useNavigate();

	const firebaseActive = debounce(() => {
		if (value) {
			const messageFirebase = firebase.database().ref("/TechSupport/");
			messageFirebase
				.orderByChild("ReqText")
				.startAt(value)
				.endAt(value + "\uf8ff")
				.once("child_added", (snapshot) => {
					const data = snapshot.val();
					console.log(data);
					setMessages([data]);
				});
		} else {
			console.log("mir");
			firebase
				.database()
				.ref(`/TechSupport/`)
				.orderByChild("index")
				.startAfter(counter)
				.limitToFirst(10)
				.on("child_added", (snapshot) => {
					const data = snapshot.val();
					setMessages((messages) => [...messages, data]);
					setCounter(counter + 9);
					setHasMore(true);
				});
			const arrActive = messages.filter(
				(e) =>
					e.operatorId === authTrue.userEmail && e.view === "active"
			);
			setFilterMess(arrActive);
		}
	}, 300);

	useEffect(() => {
		firebaseActive();
	}, [value]);

	const Btn1Click = (index) => {
		firebase
			.database()
			.ref(`/TechSupport/${index}/message/`)
			.once("value", (snapshot) => {
				const data = snapshot.val();
				setMessages(data);
				navigate(`dialog/${index}`);
			})
			.then(() => {
				setIndexUser(index);
				setMessUser(false);
			});
	};

	const Btn2Click = (index) => {
		firebase
			.database()
			.ref(`/TechSupport/${index}/`)
			.update({view: "save"});
	};

	const messageUsers = messUser ? (
		<MapUsers
			firebaseMessage={firebaseActive}
			massive={filterMess}
			Btn1Click={(index) => Btn1Click(index)}
			Btn2Click={(index) => Btn2Click(index)}
			hasMore={hasMore}
		/>
	) : (
		<div className="dialog">
			<MapUserDialog massive={messages} />
			<Panel indexUser={indexUser} />
		</div>
	);

	return <>{messageUsers}</>;
};
