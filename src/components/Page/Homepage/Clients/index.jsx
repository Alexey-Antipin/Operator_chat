import "./index.scss";
import {useContext, useEffect, useState} from "react";
import {debounce} from "lodash";
import {MapUsers} from "../../../Repeat_components/MapUsers";
import firebase from "firebase/compat/app";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {themeContext} from "../../../../context";

export const Clients = () => {
	const operatorId = useSelector((state) => state.reducer);
	const [clientsMessages, setClientsMessages] = useState([]);
	const [filterMessages, setFilterMessages] = useState([]);
	const [hasMore, setHasMore] = useState(false);
	const [counter, setCounter] = useState(null);
	const {autoText, setAutoText, setClient, setMessUser} =
		useContext(themeContext);
	const navigate = useNavigate();

	const firebaseClients = debounce(() => {
		firebase
			.database()
			.ref(`/TechSupport/`)
			.orderByChild("index")
			.startAfter(counter)
			.limitToFirst(10)
			.on("child_added", (snapshot) => {
				const data = snapshot.val();
				setClientsMessages((messages) => [...messages, data]);
				setCounter(counter + 9);
				setHasMore(true);
			});
		const arrClients = clientsMessages.filter(
			(e) => e.operatorId === "" && e.view === ""
		);
		setFilterMessages(arrClients);
	}, 500);

	const Btn2Click = (index) => {
		const chatFirebase = firebase.database().ref(`/TechSupport/${index}/`);
		chatFirebase.update({
			status: 0,
			view: "active",
			operatorId: operatorId.userEmail,
		});
		firebase
			.database()
			.ref(`/TechSupport/${index}/`)
			.orderByChild("message")
			.once("value", (snapshot) => {
				const data = snapshot.val();
				const key = data.message.length;
				firebase
					.database()
					.ref(`/TechSupport/${index}/message/${key}`)
					.set({
						content: autoText,
						timestamp: "2022",
						writtenBy: "Alex",
					});
				firebase
					.database()
					.ref(`/TechSupport/${index}/message/`)
					.once("value", (snapshot) => {
						const data = snapshot.val();
						setClient(data);
						navigate(`/homePage/active/dialog/${index}`);
						setMessUser(false);
					});
				setAutoText("");
			});
	};

	useEffect(() => {
		firebaseClients();
	}, []);

	return (
		<MapUsers
			massive={filterMessages}
			firebaseMessage={firebaseClients}
			classButtonFirst={"block__stop"}
			Btn2Click={(index) => Btn2Click(index)}
			buttonW2={"?????????? ?? ????????????"}
			hasMore={hasMore}
		/>
	);
};
