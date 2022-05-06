import React from "react";
import {Link} from "react-router-dom";

export const ButtonTurn = ({
	YourClick,
	Children,
	Word,
	ClassButton,
	ClassName,
	URL_LINK,
}) => {
	return (
		<>
			<Link to={`${URL_LINK}`}>
				<button onClick={YourClick} className={ClassButton}>
					<div>{Children}</div>
				</button>
			</Link>
			<div className={ClassName}>{Word}</div>
		</>
	);
};
