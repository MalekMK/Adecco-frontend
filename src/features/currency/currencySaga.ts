import { put, call, select } from "typed-redux-saga";
import { createSliceSaga } from "redux-toolkit-saga";
import axios, { AxiosResponse } from "axios";
import { setCurrencyData, setCurrencyHistory } from "./currencySlice";
import {
  CurrencyData,
  CurrencyHistory,
} from "../../common/models/currency.model";

export const currencySaga = createSliceSaga({
  name: "currencySaga",
  caseSagas: {
    *getCurrencyData() {
      const currency = yield select((state) => state.currency.currency);
      const response: AxiosResponse<CurrencyData> = yield* call(() =>
        axios.get<CurrencyData>(
          `${process.env.REACT_APP_API_URL}/currentprice/${currency}.json`
        )
      );
      yield* put(setCurrencyData(response.data));
    },
    *getCurrencyHistory() {
      const currency = yield select((state) => state.currency.currency);
      const response: AxiosResponse<CurrencyHistory> = yield* call(() =>
        axios.get<CurrencyHistory>(
          `${process.env.REACT_APP_API_URL}/historical/close.json?currency=${currency}`
        )
      );
      yield* put(setCurrencyHistory(response.data));
    },
  },
});

export const { getCurrencyData, getCurrencyHistory } = currencySaga.actions;
