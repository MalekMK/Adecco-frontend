import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { all } from "typed-redux-saga";
import createSagaMiddleware from "redux-saga";
import { currencySaga } from "../features/currency/currencySaga";
import { currencySlice } from "../features/currency/currencySlice";

const rootReducers = combineReducers({
  currency: currencySlice.reducer,
});

const rootSagas = function* rootSaga() {
  yield all([currencySaga.saga()]);
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;