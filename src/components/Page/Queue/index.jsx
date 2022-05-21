import "./index.scss";
import firebase from "firebase/compat/app";
import {useEffect, useState} from "react";

export const Queue = () => {
	const [queue, setQueue] = useState([]);

	const queuePeople = () => {
		firebase
			.database()
			.ref(`/TechSupport/`)
			.orderByChild("status")
			.equalTo(1)
			.on("value", (snapshot) => {
				const data = snapshot.val();
				const answer = data.length;
				setQueue([answer]);
			});
	};

	useEffect(() => {
		queuePeople();
	}, []);

	return (
		<div className="queue">
			{queue?.map((status, index) => {
				return (
					<div key={index}>
						<>Клиентов в очереди:{status}</>
					</div>
				);
			})}
		</div>
	);
};
