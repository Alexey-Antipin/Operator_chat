import "./index.scss";
import {ButtonTurn} from "../../Repeat_components";

export const RightPage = () => {
	return (
		<div className="Navbar__User">
			<ButtonTurn
				ClassButton={"OperatorButton"}
				ClassName={"OperatorName"}
				ClassChildren={"OperatorChildren"}
				Word={"Operator@mail.ru"}
				Children={"Выход"}
				URL_LINK={"/Auth"}
			/>
		</div>
	);
};
