import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./index.scss";

export const MapUsers = ({
	massive,
	Photo,
	buttonW1,
	buttonW2,
	timeMissWord,
	Btn1Click,
	Btn2Click,
	FirebaseMessage,
	classScrollBar,
	classBlockMap,
	classBlockPhoto,
	classPhoto,
	classRequestText,
	classBlockButton,
	classButton,
}) => {
	return (
		<div className={classScrollBar || "scrollBar__mess"}>
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
						<div
							className={classBlockMap || "container"}
							key={index}>
							<div className={classBlockPhoto || "block__photo"}>
								{
									<Photo
										className={
											classPhoto || "block__photo-size"
										}
									/>
								}
							</div>

							<div
								className={
									classRequestText || "block__requestText"
								}>
								{message?.ReqText}
							</div>

							<div
								className={classBlockButton || "block__button"}>
								<button
									onClick={() => Btn1Click(index)}
									className={classButton || "button"}>
									{buttonW1 || "Продолжить"}
								</button>
								<div style={{height: "50px", width: "150px"}}>
									{timeMissWord || "Пока нету"}
								</div>
								<button
									onClick={() => Btn2Click()}
									className={classButton || "button"}>
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
