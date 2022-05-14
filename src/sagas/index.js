import {fork, takeLatest, all, put} from "redux-saga/effects";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function* Connect() {
	yield setTimeout(ConnectedFirebase, 1000);
}

export function ConnectedFirebase() {
	try {
		const connectedRef = firebase.database().ref(".info/connected");

		connectedRef.on("value", function (snap) {
			if (snap.val() === true) {
				console.log("FireBase connected");
			} else {
				console.log("FireBase not connected");
			}
		});
	} catch (error) {
		console.log(error);
	}
}

export function* CreateUser({payload}) {
	yield firebase
		.auth()
		.createUserWithEmailAndPassword(
			payload.email.trim(),
			payload.password.trim()
		)

		.catch(function (error) {
			console.log(error.code);
			console.log(error.message);
		});
}

export function* AuthUser({payload}) {
	try {
		yield firebase
			.auth()
			.signInWithEmailAndPassword(
				payload.email.trim(),
				payload.password.trim()
			);

		const Token = yield firebase.auth().currentUser.getIdToken(true);
		const user = firebase.auth().currentUser;
		const UserEmail = user.email;

		yield put({
			type: "TOKEN_USER",
			payload: Token,
		});
		yield put({
			type: "USER_UID",
			payload: UserEmail,
		});
		yield put({
			type: "SUCCESSFUL_USER_YES",
			payload: {
				AuthSuccessfulTrue: true,
				AuthSuccessfulFalse: false,
			},
		});
	} catch (error) {
		console.log(error.code);
		console.log(error.message);
		yield put({
			type: "SUCCESSFUL_USER_NO",
			payload: {
				AuthSuccessfulTrue: false,
				AuthSuccessfulFalse: true,
			},
		});
	}
}

export function* ForgotPasswordUser({payload}) {
	const email = payload;

	try {
		yield firebase.auth().sendPasswordResetEmail(email);
		yield toast.success(`🦄 It's work!`, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	} catch (error) {
		console.log(error.code);
		console.log(error.message);
	}
}

export function* UpdatePasswordUser({payload}) {
	// const urlParams = new URLSearchParams(window.location.search)
	// const oobCode = urlParams.get('oobCode')
	const password = payload.New_password;
	const oobCode = payload.oobCode;

	try {
		yield firebase.auth().confirmPasswordReset(oobCode, password);
		yield toast.success(`🦄 Update Password!`, {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	} catch (error) {
		yield toast.error(`🦄 Password Don't Update!`, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		console.log(error.code);
		console.log(error.message);
	}
}

export default function* rootSaga() {
	yield all([
		yield fork(Connect),
		yield takeLatest("CREATE_USER", CreateUser),
		yield takeLatest("AUTH_USER", AuthUser),
		yield takeLatest("FORGOT_PASS_USER", ForgotPasswordUser),
		yield takeLatest("UPDATE_PASSWORD", UpdatePasswordUser),
	]);
}
