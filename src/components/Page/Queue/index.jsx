import "./index.scss";
import firebase from "firebase/compat/app";
import {useEffect, useState} from "react";

export const Queue = () => {
	const [queue, setQueue] = useState([]);

	const QueuePeople = () => {
		firebase
			.database()
			.ref(`/TechSupport/`)
			.orderByChild("status")
			.equalTo(1)
			.on("value", (snapshot) => {
				const data = snapshot.val();
				const AnswerFromServer = data.length;
				setQueue([AnswerFromServer]);
			});
	};

	useEffect(() => {
		QueuePeople();
	}, []);

	return (
		<div className="Queue">
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
