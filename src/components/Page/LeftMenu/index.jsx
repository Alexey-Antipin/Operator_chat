import "./index.scss";
import {ButtonTurn} from "../../Repeat_components/ButtonTurn";
import {FiSave} from "react-icons/fi";
import {VscVmActive} from "react-icons/vsc";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {useContext} from "react";
import {themeContext} from "../../../context";

export const LeftPage = () => {
	const {messUser, setMessUser} = useContext(themeContext);

	const MenuClick = () => {
		setMessUser(true);
		console.log("1000", messUser);
	};

	return (
		<div className="block__buttons">
			<ButtonTurn
				word={"Активные"}
				children={<VscVmActive className="icons" />}
				click={() => MenuClick()}
				url={"active"}
			/>
			<ButtonTurn
				word={"Завершенные"}
				children={<IoIosCheckmarkCircleOutline className="icons" />}
				url={"ending"}
			/>
			<ButtonTurn
				word={"Сохраненные"}
				children={<FiSave className="icons" />}
				url={"saving"}
			/>
		</div>
	);
};
