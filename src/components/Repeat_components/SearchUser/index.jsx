import React from "react";
import "./index.scss";

export const SearchUser = ({
	classBlock,
	classWord,
	setValue,
	value,
	clInput,
}) => {
	return (
		<>
			<div className={classBlock || "Block"}>
				<div className={classWord || "Word"}>Поиск: </div>
				<input
					className={clInput || "cl__input"}
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</div>
		</>
	);
};
