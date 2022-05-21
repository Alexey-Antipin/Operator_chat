import "./index.scss";
import {useCallback, useEffect, useState} from "react";
import {MapUsers} from "../../../Repeat_components/MapUsers";
import firebase from "firebase/compat/app";
import {FaUserAlt} from "react-icons/fa";

export const Clients = () => {
	const [clientsMessages, setClientsMessages] = useState([]);
	const [hasMore, setHasMore] = useState(false);
	const [after, setAfter] = useState(null);

	const firebaseClients = () => {
		firebase
			.database()
			.ref(`/TechSupport/`)
			.orderByChild("index")
			.startAfter(after)
			.limitToFirst(10)
			.once("child_added", (snapshot) => {
				const data = snapshot.val();
				setClientsMessages((messages) => [...messages, data]);
				setAfter(after + 9);
				setHasMore(true);
			});
	};

	useEffect(() => {
		firebaseClients();
	}, []);

	return (
		<MapUsers
			Photo={FaUserAlt}
			massive={clientsMessages}
			firebaseMessage={firebaseClients}
			hasMore={hasMore}
		/>
	);
};
