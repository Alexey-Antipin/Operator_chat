import "./index.scss";
import {debounce} from "lodash";
import {useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import {useSelector} from "react-redux";
import {MapUsers} from "../../../Repeat_components/MapUsers";

export const Saving = () => {
	const authTrue = useSelector((state) => state.reducer);
	const [saveMessages, setSaveMessages] = useState([]);
	const [filterMessages, setFilterMessages] = useState([]);
	const [hasMore, setHasMore] = useState(false);
	const [counter, setCounter] = useState(null);

	const firebaseSave = debounce(() => {
		firebase
			.database()
			.ref(`/TechSupport/`)
			.orderByChild("index")
			.startAfter(counter)
			.limitToFirst(10)
			.once("child_added", (snapshot) => {
				const data = snapshot.val();
				setSaveMessages((messages) => [...messages, data]);
				setCounter(counter + 9);
				setHasMore(true);
			});
		const arrSave = saveMessages.filter(
			(e) => e.operatorId === authTrue.userEmail && e.view === "save"
		);
		setFilterMessages(arrSave);
	}, 500);

	const Btn2Click = (index) => {
		const chatFirebase = firebase.database().ref(`/TechSupport/${index}/`);
		chatFirebase.update({view: "ending"});
	};

	useEffect(() => {
		firebaseSave();
	}, []);

	return (
		<MapUsers
			massive={filterMessages}
			firebaseMessage={firebaseSave}
			classButtonFirst={"block__stop"}
			Btn2Click={(index) => Btn2Click(index)}
			buttonW2={"Удалить"}
			hasMore={hasMore}
		/>
	);
};
