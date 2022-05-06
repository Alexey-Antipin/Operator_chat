import "./index.scss";
import {ButtonTurn} from "../../Repeat_components/ButtonTurn";
import {Route, Routes} from "react-router-dom";
import {SearchInput} from "../../Repeat_components/SearchInput";
import {useDispatch} from "react-redux";

export const Navbar = () => {
	const dispatch = useDispatch();

	const TokenOutUser = () => {
		dispatch({type: "TOKEN_OUT_USER", payload: false});
	};

	return (
		<div className="Navbar__User">
			<ButtonTurn
				YourClick={TokenOutUser}
				ClassButton={"OperatorButton"}
				ClassName={"OperatorName"}
				ClassChildren={"OperatorChildren"}
				Word={"Operator@mail.ru"}
				Children={"Выход"}
				URL_LINK={"/Auth"}
			/>

			<Routes>
				<Route
					path="Active"
					element={
						<SearchInput
							Block={"Block"}
							Word={"Word"}
							Input={"Input"}
						/>
					}
				/>
				<Route
					path="Ending"
					element={
						<SearchInput
							Block={"Block"}
							Word={"Word"}
							Input={"Input"}
						/>
					}
				/>
				<Route
					path="Saving"
					element={
						<SearchInput
							Block={"Block"}
							Word={"Word"}
							Input={"Input"}
						/>
					}
				/>
			</Routes>
		</div>
	);
};
