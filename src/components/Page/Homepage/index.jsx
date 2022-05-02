import "./index.scss";
import {LeftPage} from "../LeftMenu";
import {RightPage} from "../Navbar";
import {Route, Routes} from "react-router-dom";
import {Active} from "./Active";
import {Saving} from "./Saving";
import {Ending} from "./Ending";

export const Page = () => {
	return (
		<div className="Page">
			<div className="Left__Block">
				<LeftPage />
			</div>

			<div className="Right__Block">
				<RightPage />
				<Routes>
					<Route path="Active" element={<Active />} />
					<Route path="Ending" element={<Ending />} />
					<Route path="Saving" element={<Saving />} />
				</Routes>
			</div>
		</div>
	);
};
