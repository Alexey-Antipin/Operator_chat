import firebase from "firebase/compat/app";
import "./index.scss";

export const Settings = ({
	name,
	massive,
	btnD,
	btn,
	group,
	cl,
	clName,
	clBtn,
	clMap,
	clBlock,
	clBtnD,
}) => {
	const AddWordClick = () => {
		firebase
			.database()
			.ref(`/Settings/${group}/`)
			.limitToLast(1)
			.once("child_added", function (snapshot) {
				const key = snapshot.key;
				const MasKey = Number(key) + 1;
				firebase.database().ref(`/Settings/${group}/${MasKey}`).set(1);
				return;
			});
	};

	const RemoveWordClick = (index) => {
		const Remove_Word = firebase
			.database()
			.ref(`/Settings/${group}/${index}`);
		Remove_Word.remove().then(function () {
			console.log("Remove succeeded.");
		});
	};

	return (
		<div className={cl || "cl"}>
			<div className={clName || "cl_name"}>{name}</div>
			<div className={clMap || "cl_map"}>
				{massive != null ? (
					massive?.map((word, index) => {
						return (
							<div key={index}>
								<div className={clBlock || "cl_block"}>
									<div>{word}</div>
									<button
										className={clBtnD || "cl_D_btn"}
										onClick={() => RemoveWordClick(index)}>
										{btnD || "-"}
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
					className={clBtn || "cl_btn"}
					onClick={() => AddWordClick()}>
					{btn || "Добавить еще"}
				</button>
			</div>
		</div>
	);
};
