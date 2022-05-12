import React from "react";

export const MapUser = ({
	Massive,
	CRequest_Text,
	CwrittenBy,
	Ccontent,
	Ctimestamp,
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
}) => {
	return (
		<div className={ScrollBar}>
			{Massive?.map((message, index) => {
				return (
					<div className={BlockMap} key={index}>
						<div className={BlockPhoto}>
							{<Photo className={CPhoto} />}
						</div>

						<div className={CRequest_Text}>
							{message?.Request_Text}
						</div>

						<div className={CwrittenBy}>{message?.writtenBy}</div>
						<div className={Ccontent}>{message?.content}</div>
						<div className={Ctimestamp}>{message?.timestamp}</div>

						<div className={BlockButton}>
							<button className={b1}>{ButtonW1}</button>
							<div className={b2}>{TimeMiss}</div>
							<button className={b3}>{ButtonW2}</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
