import "./index.scss";
import {ButtonTurn} from "../../Repeat_components/ButtonTurn";
import {FiSave} from "react-icons/fi";
import {VscVmActive} from "react-icons/vsc";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {useContext} from "react";
import {ThemeContext} from "../../../context";

export const LeftPage = () => {
	const {setMessUser} = useContext(ThemeContext);

	const MenuClick = () => {
		return setMessUser(false);
	};

	return (
		<div className="Block__Buttons">
			<ButtonTurn
				ClassButton={"ClassButton"}
				ClassName={"ClassName"}
				Word={"Активные"}
				Children={<VscVmActive className="Icons" />}
				YourClick={MenuClick}
				URL_LINK={"Active"}
			/>
			<ButtonTurn
				ClassButton={"ClassButton"}
				ClassName={"ClassName"}
				Word={"Завершенные"}
				Children={<IoIosCheckmarkCircleOutline className="Icons" />}
				URL_LINK={"Ending"}
			/>
			<ButtonTurn
				ClassButton={"ClassButton"}
				ClassName={"ClassName"}
				Word={"Сохраненные"}
				Children={<FiSave className="Icons" />}
				URL_LINK={"Saving"}
			/>
		</div>
	);
};
