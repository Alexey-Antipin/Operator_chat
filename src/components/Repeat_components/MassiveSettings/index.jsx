import firebase from "firebase/compat/app";
import {useEffect, useState} from "react";
import "./index.scss";

export const Settings = ({
	name,
	massive,
	button,
	group,
	classContainer,
	className,
	classMap,
	classBlock,
	classButtonDelete,
	classButton,
}) => {
	const [indexUser, setIndex] = useState("");

	const findUserFirebase = () => {
		firebase
			.database()
			.ref(`Profile`)
			.orderByChild("operatorId")
			.equalTo("stierlitzotto21@gmail.com")
			.on("child_added", function (snapshot) {
				const index = snapshot.val().index;
				setIndex(index);
			});
	};

	useEffect(() => {
		findUserFirebase();
	}, []);

	const addWordClick = () => {
		firebase
			.database()
			.ref(`Profile/${indexUser}/settings/${group}`)
			.once("value", (snapshot) => {
				const data = snapshot.val();
				const key = data.length;
				firebase
					.database()
					.ref(`Profile/${indexUser}/settings/${group}/${key}`)
					.set(1);
			});
	};

	const removeWordClick = (index) => {
		const removeWord = firebase
			.database()
			.ref(`Profile/${indexUser}/settings/${group}/${index}`);
		removeWord.remove().then(function () {
			console.log("Remove succeeded.");
		});
	};

	return (
		<div className={classContainer || "class__container"}>
			<div className={className || "class__group"}>{name}</div>
			<div className={classMap || "class__map"}>
				{massive != null ? (
					massive?.map((word, index) => {
						return (
							<div key={index}>
								<div
									className={
										classBlock || "class__block-button"
									}>
									<div>{word}</div>
									<button
										className={
											classButtonDelete ||
											"class__button-delete"
										}
										onClick={() => removeWordClick(index)}>
										{button || "-"}
									</button>
								</div>
							</div>
						);
					})
				) : (
					<div>Список пуст, пополни его.</div>
				)}
			</div>
			<div>
				<button
					className={classButton || "class__button-add"}
					onClick={() => addWordClick()}>
					{button || "Добавить еще"}
				</button>
			</div>
		</div>
	);
};
