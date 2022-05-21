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
import {firebaseTokenUser} from "../../../sagas/action/index";
import {ChatSet} from "../Settings_text/ChatSet";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import {Clients} from "./Clients";

class Page extends Component {
	componentDidMount() {
		const {firebaseTokenUser} = this.props;
		firebase.auth().onIdTokenChanged(function (user) {
			if (user) {
				user.getIdToken(true).then((token) => {
					firebaseTokenUser(token);
				});
			} else {
				<Navigate replace to="/auth" />;
			}
		});
	}

	render() {
		return (
			<div className="page">
				<div className="left__block">
					<LeftPage />
				</div>

				<div className="right__block">
					<Navbar />
					<Routes>
						<Route path="active/*" element={<Active />} />
						<Route path="ending/*" element={<Ending />} />
						<Route path="saving/*" element={<Saving />} />
						<Route path="chatSet" element={<ChatSet />} />
						<Route path="clients" element={<Clients />} />
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
const mapDispatchToProps = (dispatch) => {
	return {
		firebaseTokenUser: (event) => dispatch(firebaseTokenUser(event)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
