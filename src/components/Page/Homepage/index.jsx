import "./index.scss";
import React, {Component} from "react";
import {LeftPage} from "../LeftMenu";
import {Navbar} from "../Navbar";
import {Route, Routes} from "react-router-dom";
import {Active} from "./Active";
import {Saving} from "./Saving";
import {Ending} from "./Ending";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

class Page extends Component {
	componentDidMount() {
		const {TokenUser} = this.props.state;

		if (TokenUser) {
			console.log("Auth__User");
		} else {
			<Navigate replace to="/Login" />;
		}
	}

	render() {
		return (
			<div className="Page">
				<div className="Left__Block">
					<LeftPage />
				</div>

				<div className="Right__Block">
					<Navbar />
					<Routes>
						<Route path="Active" element={<Active />} />
						<Route path="Ending" element={<Ending />} />
						<Route path="Saving" element={<Saving />} />
					</Routes>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state: state.reducer,
	};
}

export default connect(mapStateToProps)(Page);
