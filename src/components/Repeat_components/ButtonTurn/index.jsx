import React from "react";
import {Link} from "react-router-dom";
import "./index.scss";

export const ButtonTurn = ({
	url,
	yourClick,
	classButton,
	children,
	className,
	word,
}) => {
	return (
		<>
			<Link to={`${url}`}>
				<button
					onClick={yourClick}
					className={classButton || "ClButton"}>
					<div>{children || "Выход"}</div>
				</button>
			</Link>
			<div className={className || "ClName"}>{word}</div>
		</>
	);
};
