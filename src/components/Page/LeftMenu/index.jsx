import "./index.scss";
import {ButtonTurn} from "../../Repeat_components/ButtonTurn";
import {FiSave} from "react-icons/fi";
import {VscVmActive} from "react-icons/vsc";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {useContext} from "react";
import {themeContext} from "../../../context";

export const LeftPage = () => {
	const {setMessUser} = useContext(themeContext);

	const MenuClick = () => {
		return setMessUser(false);
	};

	return (
		<div className="Block__Buttons">
			<ButtonTurn
				word={"Активные"}
				children={<VscVmActive className="Icons" />}
				YourClick={MenuClick}
				url={"Active"}
			/>
			<ButtonTurn
				word={"Завершенные"}
				children={<IoIosCheckmarkCircleOutline className="Icons" />}
				url={"Ending"}
			/>
			<ButtonTurn
				word={"Сохраненные"}
				children={<FiSave className="Icons" />}
				url={"Saving"}
			/>
		</div>
	);
};
