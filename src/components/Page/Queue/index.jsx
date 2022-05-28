import "./index.scss";
import firebase from "firebase/compat/app";
import {debounce} from "lodash";
import {useEffect, useState} from "react";

export const Queue = () => {
	const [queue, setQueue] = useState([]);

	const queuePeople = debounce(() => {
		firebase
			.database()
			.ref(`/TechSupport/`)
			.orderByChild("status")
			.equalTo(1)
			.on("child_added", (snapshot) => {
				const data = snapshot.val().status;
				console.log("data", data);
				setQueue((queue) => [...queue, data]);
			});
	}, 500);

	useEffect(() => {
		queuePeople();
	}, []);

	return (
		<div className="queue">
			<>Клиентов в очереди:{queue.length}</>
		</div>
	);
};
