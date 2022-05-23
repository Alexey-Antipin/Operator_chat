import "./index.scss";
import firebase from "firebase/compat/app";
import {debounce} from "lodash";
import {MapUsers} from "../../../Repeat_components/MapUsers";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const Ending = () => {
	const [counter, setCounter] = useState(null);
	const [EndingMessages, setEndingsMessages] = useState([]);
	const [filterMess, setFilterMess] = useState();
	const [hasMore, setHasMore] = useState(false);
	const authTrue = useSelector((state) => state.reducer);

	const firebaseEnding = debounce(() => {
		firebase
			.database()
			.ref(`/TechSupport/`)
			.orderByChild("index")
			.startAfter(counter)
			.limitToFirst(10)
			.once("child_added", (snapshot) => {
				const data = snapshot.val();
				setEndingsMessages((messages) => [...messages, data]);
				setCounter(counter + 9);
				setHasMore(true);
			});
		const arrEnding = EndingMessages.filter(
			(e) => e.operatorId === authTrue.userEmail && e.view === "ending"
		);
		setFilterMess(arrEnding);
	}, 500);

	useEffect(() => {
		firebaseEnding();
	}, []);

	const Btn2Click = (index) => {
		const chatFirebase = firebase.database().ref(`/TechSupport/${index}/`);
		chatFirebase.update({view: "save"});
	};

	return (
		<MapUsers
			FirebaseMessage={firebaseEnding}
			massive={filterMess}
			classButtonFirst={"block__stop"}
			Btn2Click={(index) => Btn2Click(index)}
			hasMore={hasMore}
		/>
	);
};
