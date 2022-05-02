import React from "react";
import {Link} from "react-router-dom";

export const ButtonTurn = ({
	Children,
	Word,
	ClassButton,
	ClassName,
	ClassChildren,
	URL_LINK,
}) => {
	return (
		<>
			<Link to={`${URL_LINK}`}>
				<button className={ClassButton}>
					<div className={ClassChildren}>{Children}</div>
				</button>
			</Link>
			<div className={ClassName}>{Word}</div>
		</>
	);
};
