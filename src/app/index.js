import React, {useState} from "react";
import {useSelector} from "react-redux";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Auth} from "../components/Auth_Page/Auth";
import {ForgotPass} from "../components/Auth_Page/ForgotPass";
import {Login} from "../components/Auth_Page/Login";
import Page from "../components/Page/Homepage";
import {NotFound} from "../components/Auth_Page/NotFound";
import {UpdatePass} from "../components/Auth_Page/UpdatePass";
import {themeContext} from "../context";
import "./index.scss";

function App() {
	const [value, setValue] = useState("");
	const [messUser, setMessUser] = useState(true);
	const [client, setClient] = useState([]);
	const account = useSelector((state) => state.reducer);

	return (
		<div className="app">
			<themeContext.Provider
				value={{
					client,
					setClient,
					setMessUser,
					messUser,
					setValue,
					value,
				}}>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/auth" element={<Auth />} />
						<Route path="/forgotPass" element={<ForgotPass />} />
						<Route path="/updatePass" element={<UpdatePass />} />

						{account.tokenUser ? (
							<Route path="/homePage/*" element={<Page />} />
						) : (
							<Route
								path="/homePage/*"
								element={<Navigate to="/auth" replace />}
							/>
						)}
						<Route
							path="/"
							element={<Navigate to="/auth" replace />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</themeContext.Provider>
		</div>
	);
}

export default App;
