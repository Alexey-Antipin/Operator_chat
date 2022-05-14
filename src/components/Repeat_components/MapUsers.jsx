import React from "react";

export const MapUsers = ({
	Massive,
	CRequest_Text,
	BlockMap,
	BlockPhoto,
	CPhoto,
	Photo,
	ScrollBar,
	ButtonW1,
	ButtonW2,
	TimeMiss,
	BlockButton,
	b1,
	b2,
	b3,
	Btn1Click,
	Btn2Click,
}) => {
	return (
		<div className={ScrollBar}>
			{Massive?.map((message, index) => {
				return (
					<div className={BlockMap} key={index}>
						<div className={BlockPhoto}>
							{<Photo className={CPhoto} />}
						</div>

						<div className={CRequest_Text}>{message?.ReqText}</div>

						<div className={BlockButton}>
							<button
								onClick={() => Btn1Click(index)}
								className={b1}>
								{ButtonW1}
							</button>
							<div className={b2}>{TimeMiss}</div>
							<button onClick={() => Btn2Click()} className={b3}>
								{ButtonW2}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
