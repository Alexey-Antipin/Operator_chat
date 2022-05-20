import React from "react";
import {Link} from "react-router-dom";
import "./index.scss";

export const ButtonTurn = ({
	url,
	click,
	classButton,
	children,
	className,
	word,
}) => {
	return (
		<>
			<Link to={`${url}`}>
				<button
					onClick={click}
					className={classButton || "class__button"}>
					<div>{children || "Выход"}</div>
				</button>
			</Link>
			<div className={className || "class__name"}>{word}</div>
		</>
	);
};
