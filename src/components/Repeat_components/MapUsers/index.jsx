import React from "react";
import "./index.scss";
import InfiniteScroll from "react-infinite-scroller";

export const MapUsers = ({
	massive,
	scrollBar,
	blockMap,
	blockPhoto,
	cPhoto,
	cRequestText,
	blockButton,
	buttonW1,
	buttonW2,
	Photo,
	timeMiss,
	clBtn,
	Btn1Click,
	Btn2Click,
	FirebaseMessage,
}) => {
	return (
		<div className={scrollBar || "ScrollBar__Messages"}>
			<InfiniteScroll
				loadMore={FirebaseMessage}
				hasMore={true}
				loader={
					<div className="loader" key={0}>
						Загрузка...
					</div>
				}
				useWindow={false}>
				{massive?.map((message, index) => {
					return (
						<div className={blockMap || "BlockMap"} key={index}>
							<div className={blockPhoto || "BlockPhoto"}>
								{<Photo className={cPhoto || "CPhoto"} />}
							</div>

							<div className={cRequestText || "CRequest_Text"}>
								{message?.ReqText}
							</div>

							<div className={blockButton || "BlockButton"}>
								<button
									onClick={() => Btn1Click(index)}
									className={clBtn || "clBtn"}>
									{buttonW1 || "Продолжить"}
								</button>
								<div style={{height: "50px", width: "150px"}}>
									{timeMiss || "Пока нету"}
								</div>
								<button
									onClick={() => Btn2Click()}
									className={clBtn || "clBtn"}>
									{buttonW2 || "Сохранить"}
								</button>
							</div>
						</div>
					);
				})}
			</InfiniteScroll>
		</div>
	);
};
