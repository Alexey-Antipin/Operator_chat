import "./index.scss";
import {useContext, useEffect, useState} from "react";
import {debounce} from "lodash";
import firebase from "firebase/compat/app";
import {MapUsers} from "../../../Repeat_components/MapUsers";
import {MapUserDialog} from "../Dialog";
import {themeContext} from "../../../../context";
import {Route, Routes, useNavigate} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import {Panel} from "../Panel";

export const Active = () => {
	const [messages, setMessages] = useState([]);
	const [filterMess, setFilterMess] = useState();
	const [hasMore, setHasMore] = useState(false);
	const [counter, setCounter] = useState(null);
	const {messUser, setMessUser, value} = useContext(themeContext);
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
			firebase
				.database()
				.ref(`/TechSupport/`)
				.orderByChild("index")
				.startAfter(counter)
				.limitToFirst(10)
				.once("child_added", (snapshot) => {
					const data = snapshot.val();
					setMessages((messages) => [...messages, data]);
					setCounter(counter + 9);
					setHasMore(true);
				});
			const arr = messages.filter((d) => d.operatorId === 50);
			setFilterMess(arr);
		}
	}, 300);

	useEffect(() => {
		firebaseActive();
	}, [value]);

	const Btn1Click = (index) => {
		const chatFirebase = firebase
			.database()
			.ref(`/TechSupport/${index}/task/mess/`);
		chatFirebase
			.once("value", (snapshot) => {
				const data = snapshot.val();
				setMessages(data);
				navigate(`dialog/${index}`);
			})
			.then(() => {
				setMessUser(false);
			});
	};
	const Btn2Click = () => {};

	const messageUsers = messUser ? (
		<>
			<MapUsers
				firebaseMessage={firebaseActive}
				Photo={FaUserAlt}
				massive={filterMess}
				Btn1Click={(index) => Btn1Click(index)}
				Btn2Click={Btn2Click}
				hasMore={hasMore}
			/>
		</>
	) : (
		<div className="dialog">
			<Routes>
				<Route
					path="/dialog/*"
					element={
						<>
							<MapUserDialog massive={messages} />
							<Panel />
						</>
					}
				/>
			</Routes>
		</div>
	);

	return <>{messageUsers}</>;
};
