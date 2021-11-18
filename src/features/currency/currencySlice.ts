import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CurrencyData,
  CurrencyHistory,
} from "../../common/models/currency.model";

interface CurrencyState {
  currency: string;
  currencyData: CurrencyData;
  currencyHistory: CurrencyHistory;
}

const initialState: CurrencyState = {
  currency: "USD",
  currencyData: {
    time: null,
    disclaimer: "",
    bpi: null,
  },
  currencyHistory: {
    time: null,
    disclaimer: "",
    bpi: null,
  },
};

export const currencySlice = createSlice({
  name: "currencyReducer",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setCurrencyData: (state, action: PayloadAction<CurrencyData>) => {
      state.currencyData = action.payload;
    },
    setCurrencyHistory: (state, action: PayloadAction<CurrencyHistory>) => {
      state.currencyHistory = action.payload;
    },
  },
});

export const { setCurrency, setCurrencyData, setCurrencyHistory } =
  currencySlice.actions;
