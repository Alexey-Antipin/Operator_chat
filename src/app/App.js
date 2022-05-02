import {useSelector} from "react-redux";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Auth} from "../components/Auth_Page/Auth";
import {ForgotPass} from "../components/Auth_Page/ForgotPass";
import {Login} from "../components/Auth_Page/Formik";
import {Page} from "../components/Page/Homepage";
import {NotFound} from "../components/Auth_Page/NotFound";
import {UpdatePass} from "../components/Auth_Page/UpdatePass";
import "./App.scss";

function App() {
	const Account = useSelector((state) => state.reducer);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/Login" element={<Login />} />
					<Route path="/Auth" element={<Auth />} />
					<Route path="/ForgotPass" element={<ForgotPass />} />
					<Route path="/UpdatePass" element={<UpdatePass />} />
					<Route path="/*" element={<Page />} />
					{/* {
            Account.hasAccount ?
              <Route path="/" element={<Page />} />
              :
              <Route path="/" element={<Navigate to="/Auth" replace />} />
          } */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
