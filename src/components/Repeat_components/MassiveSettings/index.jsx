import firebase from "firebase/compat/app";
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
	const AddWordClick = () => {
		firebase
			.database()
			.ref(`/settings/${group}/`)
			.limitToLast(1)
			.once("child_added", function (snapshot) {
				const key = snapshot.key;
				const massiveKey = Number(key) + 1;
				firebase
					.database()
					.ref(`/settings/${group}/${massiveKey}`)
					.set(1);
				return;
			});
	};

	const RemoveWordClick = (index) => {
		const removeWord = firebase
			.database()
			.ref(`/settings/${group}/${index}`);
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
										onClick={() => RemoveWordClick(index)}>
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
					onClick={() => AddWordClick()}>
					{button || "Добавить еще"}
				</button>
			</div>
		</div>
	);
};
