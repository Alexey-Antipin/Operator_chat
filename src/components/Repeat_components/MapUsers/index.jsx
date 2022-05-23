import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import {FaUserAlt} from "react-icons/fa";
import "./index.scss";

export const MapUsers = ({
	massive,
	buttonW1,
	buttonW2,
	timeMissWord,
	Btn1Click,
	Btn2Click,
	firebaseMessage,
	classScrollBar,
	classBlockMap,
	classBlockPhoto,
	classPhoto,
	classRequestText,
	classBlockButton,
	classBlockTime,
	classButtonFirst,
	classButtonSecond,
	hasMore,
}) => {
	return (
		<div className={classScrollBar || "scrollBar__mess"}>
			<InfiniteScroll
				loadMore={firebaseMessage}
				hasMore={hasMore || false}
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
									<FaUserAlt
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
								{message?.theme}
							</div>

							<div
								className={classBlockButton || "block__button"}>
								<button
									onClick={() => Btn1Click(message.index)}
									className={classButtonFirst || "button"}>
									{buttonW1 || "Продолжить"}
								</button>
								<div
									className={classBlockTime || "block__time"}>
									{timeMissWord || "Пока нету"}
								</div>
								<button
									onClick={() => Btn2Click(message.index)}
									className={classButtonSecond || "button"}>
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
