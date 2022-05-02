import React from "react";

export const Field = ({ClassField, Children}) => {
	return <div className={ClassField}>{Children}</div>;
};
