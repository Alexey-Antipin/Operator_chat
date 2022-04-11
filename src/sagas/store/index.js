import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducer";
import rootSaga from "../../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({reducer}),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;