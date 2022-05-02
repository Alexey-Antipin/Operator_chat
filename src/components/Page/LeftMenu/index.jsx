import "./index.scss";
import {ButtonTurn} from "../../Repeat_components/ButtonTurn";

export const LeftPage = () => {
	return (
		<div className="Block__Buttons">
			<ButtonTurn
				ClassButton={"ClassButton"}
				ClassName={"ClassName"}
				ClassChildren={"ClassChildren"}
				Word={"Активные"}
				Children={"Фотка"}
				URL_LINK={"Active"}
			/>
			<ButtonTurn
				ClassButton={"ClassButton"}
				ClassName={"ClassName"}
				ClassChildren={"ClassChildren"}
				Word={"Завершенные"}
				Children={"Фотка"}
				URL_LINK={"Ending"}
			/>
			<ButtonTurn
				ClassButton={"ClassButton"}
				ClassName={"ClassName"}
				ClassChildren={"ClassChildren"}
				Word={"Сохраненные"}
				Children={"Фотка"}
				URL_LINK={"Saving"}
			/>
		</div>
	);
};
