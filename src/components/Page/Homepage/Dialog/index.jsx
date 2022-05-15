import "./index.scss";

export const MapUserDialog = ({Massive}) => {
	return (
		<div className={"ScrollBar_Dialog"}>
			{Massive?.map((e, index) => {
				return (
					<div className={"BlockMapUser"} key={index}>
						<div>{index}</div>

						<div className={"CwrittenBy"}>
							CwrittenBy___
							{e?.writtenBy}
						</div>
						<div className={"Ccontent"}>
							Content___
							{e?.content}
						</div>
						<div className={"Ctimestamp"}>
							Timestamp___
							{e?.timestamp}
						</div>
					</div>
				);
			})}
		</div>
	);
};
