import "./index.scss";
import {ButtonTurn} from "../../Repeat_components/ButtonTurn";
import {useDispatch} from "react-redux";
import {SearchUser} from "../../Repeat_components/SearchUser";
import {Route, Routes} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "../../../context/index.js";
import {Queue} from "../Queue";

export const Navbar = () => {
	const dispatch = useDispatch();
	const {setValue, value} = useContext(ThemeContext);

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
					path="Active/*"
					element={
						<>
							<SearchUser
								element={<Queue />}
								cl__element={"cl__element"}
								cl__input={"cl__input"}
								classBlock={"Block"}
								classWord={"Word"}
								setValue={setValue}
								value={value}
							/>
						</>
					}
				/>

				{/* <Route
					path="Ending/*"
					element={
						<SearchUser
							classBlock={"Block"}
							classWord={"Word"}
							setValue={setValue}
							value={value}
						/>
					}
				/>
				<Route
					path="Saving/*"
					element={
						<SearchUser
							classBlock={"Block"}
							classWord={"Word"}
							setValue={setValue}
							value={value}
						/>
					}
				/> */}
			</Routes>
		</div>
	);
};
