import React from "react";
import "./index.scss";

export const SearchUser = ({
	classBlock,
	classWord,
	classInput,
	setValue,
	value,
}) => {
	return (
		<>
			<div className={classBlock || "class__block"}>
				<div className={classWord || "class__word"}>Поиск: </div>
				<input
					className={classInput || "class__input"}
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</div>
		</>
	);
};
