import React from "react";
import ParticlesBg from "particles-bg";
import CurrencyDashboard from "../features/currency/CurrencyDashboard";
import {
  getCurrencyData,
  getCurrencyHistory,
} from "../features/currency/currencySaga";
import { useAppDispatch, useAppSelector } from "./hooks";

const App = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector((state) => state.currency.currency);
  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getCurrencyData());
      dispatch(getCurrencyHistory());
    }, 60000);
    return () => clearInterval(interval);
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getCurrencyData());
    dispatch(getCurrencyHistory());
  }, [dispatch, currency]);

  return (
    <div className="App">
      <CurrencyDashboard />
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
};

export default App;
