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

	const tokenOutUser = () => {
		dispatch({type: "TOKEN_OUT_USER", payload: false});
	};

	return (
		<div className="navbar">
			<ButtonTurn
				YourClick={tokenOutUser}
				classButton={"operator__button"}
				className={"operator__name"}
				word={"Operator@mail.ru"}
				url={"/auth"}
			/>
			<Routes>
				<Route
					path="active/"
					element={<SearchUser setValue={setValue} value={value} />}
				/>

				{/* <Route
					path="ending/"
					element={
						<SearchUser							
							setValue={setValue}
							value={value}
						/>
					}
				/>
				<Route
					path="saving/"
					element={
						<SearchUser
							setValue={setValue}
							value={value}
						/>
					}
				/> */}
				<Route
					path="clients"
					element={
						<>
							<Queue />
							<SearchUser setValue={setValue} value={value} />
						</>
					}
				/>
			</Routes>
		</div>
	);
};
