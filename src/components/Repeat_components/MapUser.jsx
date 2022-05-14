import React from "react";

export const MapUser = ({
	Massive,
	CwrittenBy,
	Ccontent,
	Ctimestamp,
	BlockMap,
	ScrollBar,
}) => {
	return (
		<div className={ScrollBar}>
			{Massive?.map((e, index) => {
				return (
					<div className={BlockMap} key={index}>
						<div>{index}</div>
						<div className={CwrittenBy}>
							CwrittenBy___
							{e?.writtenBy}
						</div>
						<div className={Ccontent}>
							Content___
							{e?.content}
						</div>
						<div className={Ctimestamp}>
							Timestamp___
							{e?.timestamp}
						</div>
					</div>
				);
			})}
		</div>
	);
};
