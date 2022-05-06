import React from "react";

export const SearchInput = ({Block, Word, Input}) => {
	return (
		<div className={Block}>
			<div className={Word}>Поиск: </div>
			<input className={Input} />
		</div>
	);
};
