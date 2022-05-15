import firebase from "firebase/compat/app";

export const Settings = ({
	w_name,
	Massive,
	wD_btn,
	w_btn,
	group,
	cl,
	cl_name,
	cl_btn,
	cl_map,
	cl_block,
	cl_D_btn,
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
		<div className={cl}>
			<div className={cl_name}>{w_name}</div>
			<div className={cl_map}>
				{Massive != null ? (
					Massive?.map((word, index) => {
						return (
							<div key={index}>
								<div className={cl_block}>
									<div>{word}</div>
									<button
										className={cl_D_btn}
										onClick={() => RemoveWordClick(index)}>
										{wD_btn}
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
				<button className={cl_btn} onClick={() => AddWordClick()}>
					{w_btn}
				</button>
			</div>
		</div>
	);
};
