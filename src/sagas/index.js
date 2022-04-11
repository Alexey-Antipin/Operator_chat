import { fork, takeLatest, all, put } from "redux-saga/effects";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

export function* Connect() {
    setTimeout(ConnectedFirebase, 1000)
}

export function ConnectedFirebase() {
    try {
        const connectedRef = firebase.database().ref(".info/connected");

        connectedRef.on("value", function (snap) {
            if (snap.val() === true) {
                console.log("FireBase connected")
            }
            else {
                console.log("FireBase not connected");
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export function* CreateUser({ payload }) {
    firebase.auth().createUserWithEmailAndPassword(
        payload.email.trim(),
        payload.password.trim())

        .catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        });
}

export function* AuthUser({ payload }) {

    yield firebase.auth().signInWithEmailAndPassword(
        payload.email.trim(),
        payload.password.trim())
        .catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        });

    yield put({ type: "TURN_USER", payload: true })
}

export default function* rootSaga() {
    yield all([
        yield fork(Connect),
        yield takeLatest("CREATE_USER", CreateUser),
        yield takeLatest("AUTH_USER", AuthUser),
    ])
}
