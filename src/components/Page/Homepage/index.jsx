import "./index.scss";
import {LeftPage} from "../LeftPage";
import {RightPage} from "../RightPage";

export const Page = () => {
	return (
		<div className="Page">
			<div className="Left__Block">
				<LeftPage />
			</div>

			<div className="Right__Block">
				<RightPage />
			</div>
		</div>
	);
};
