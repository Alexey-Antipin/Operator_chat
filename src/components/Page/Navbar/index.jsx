import "./index.scss";
import {ButtonTurn} from "../../Repeat_components/ButtonTurn";
import {useDispatch} from "react-redux";
import {SearchUser} from "../../Repeat_components/SearchUser";
import {Route, Routes} from "react-router-dom";
import {useContext} from "react";
import {themeContext} from "../../../context/index.js";
import {Queue} from "../Queue";

export const Navbar = () => {
	const dispatch = useDispatch();
	const {setValue, value} = useContext(themeContext);

	const TokenOutUser = () => {
		dispatch({type: "TOKEN_OUT_USER", payload: false});
	};

	return (
		<div className="Navbar__User">
			<ButtonTurn
				YourClick={TokenOutUser}
				classButton={"OperatorButton"}
				className={"OperatorName"}
				word={"Operator@mail.ru"}
				url={"/Auth"}
			/>
			<Routes>
				<Route
					path="Active/"
					element={
						<>
							<Queue className="Queue" />
							<SearchUser setValue={setValue} value={value} />
						</>
					}
				/>

				{/* <Route
					path="Ending/*"
					element={
						<SearchUser							
							setValue={setValue}
							value={value}
						/>
					}
				/>
				<Route
					path="Saving/*"
					element={
						<SearchUser
							setValue={setValue}
							value={value}
						/>
					}
				/> */}
			</Routes>
		</div>
	);
};
