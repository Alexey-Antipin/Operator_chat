import React from "react";

export const SearchUser = ({
	classBlock,
	classWord,
	setValue,
	value,
	element,
	cl__element,
	cl__input,
}) => {
	return (
		<>
			<div className={classBlock}>
				<div className={cl__element}>{element}</div>
				<div className={classWord}>Поиск: </div>
				<input
					className={cl__input}
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</div>
		</>
	);
};
