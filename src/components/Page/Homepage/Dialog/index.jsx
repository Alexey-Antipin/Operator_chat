import "./index.scss";

export const MapUserDialog = ({massive}) => {
	return (
		<div className={"scroll"}>
			{massive?.map((e, index) => {
				return (
					<div className={"block__text"} key={index}>
						<div>{index}</div>

						<div>
							CwrittenBy___
							{e?.writtenBy}
						</div>
						<div>
							Content___
							{e?.content}
						</div>
						<div>
							Timestamp___
							{e?.timestamp}
						</div>
					</div>
				);
			})}
		</div>
	);
};
