import "./index.scss";
import {FaUserAlt} from "react-icons/fa";
import {MapUsers} from "../../../Repeat_components/MapUsers";

export const Ending = () => {
	return (
		<MapUsers
			ScrollBar={"ScrollBar"}
			BlockMap={"BlockMap"}
			BlockPhoto={"BlockPhoto"}
			CPhoto={"CPhoto"}
			Photo={FaUserAlt}
			CRequest_Text={"CRequest_Text"}
			// Massive={Messages}
			BlockButton={"BlockButton"}
			ButtonW1={"Продолжить"}
			ButtonW2={"Сохранить"}
			TimeMiss={"Пока нету"}
			b1={"b1"}
			b2={"b2"}
			b3={"b3"}
		/>
	);
};
