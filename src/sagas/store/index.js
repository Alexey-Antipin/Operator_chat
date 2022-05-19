import {createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducer";
import rootSaga from "../../sagas";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {composeWithDevTools} from "@redux-devtools/extension";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({reducer: reducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	persistedReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
