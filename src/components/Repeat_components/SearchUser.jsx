import React from "react";

export const SearchUser = ({classBlock, classWord, setValue, value}) => {
	return (
		<>
			<div className={classBlock}>
				<div className={classWord}>Поиск: </div>
				<input
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</div>
		</>
	);
};
