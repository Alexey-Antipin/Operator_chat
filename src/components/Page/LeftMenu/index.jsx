import "./index.scss";
import {ButtonTurn} from "../../Repeat_components/ButtonTurn";
import {FiSave} from "react-icons/fi";
import {IoIosMan} from "react-icons/io";
import {VscVmActive} from "react-icons/vsc";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";

export const LeftPage = () => {
	return (
		<div className="block__buttons">
			<ButtonTurn
				word={"Активные"}
				children={<VscVmActive className="icons" />}
				url={"active"}
			/>
			<ButtonTurn
				word={"Завершённые"}
				children={<IoIosCheckmarkCircleOutline className="icons" />}
				url={"ending"}
			/>
			<ButtonTurn
				word={"Сохранённые"}
				children={<FiSave className="icons" />}
				url={"saving"}
			/>
			<ButtonTurn
				word={"Клиенты"}
				children={<IoIosMan className="icons" />}
				url={"clients"}
			/>
		</div>
	);
};
