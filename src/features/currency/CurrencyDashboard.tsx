import React from "react";
import {
  Container,
  MenuItem,
  FormControl,
  Typography,
  Button,
  Grid,
  Modal,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrency } from "./currencySlice";
import { CurrencyChart } from "./CurrencyChart";

const mainStyle = {
  maxWidth: "90vw",
  display: "flex",
  justifyContent: "center",
};

const paperStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  width: "90vw",
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const CurrencyDashboard = () => {
  const [currencyInput, setCurrencyInput] = React.useState("USD");
  const dispatch = useAppDispatch();
  const currencyData = useAppSelector((state) => state.currency.currencyData);

  const handleChange = (event: SelectChangeEvent) => {
    setCurrencyInput(String(event.target.value));
    dispatch(setCurrency(String(event.target.value)));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container sx={paperStyle}>
          <CurrencyChart setOpenModal={setOpen} />
        </Grid>
      </Modal>
      <Grid sx={mainStyle}>
        <Typography
          style={{ display: "inline-flex", maxWidth: "60vw" }}
          variant="h4"
        >
          {currencyInput === "USD" && currencyData.bpi?.USD.rate_float && (
            <span>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: currencyInput,
              }).format(currencyData.bpi?.USD.rate_float)}
            </span>
          )}
          {currencyInput === "EUR" && currencyData.bpi?.EUR?.rate_float && (
            <span>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: currencyInput,
              }).format(currencyData.bpi?.EUR?.rate_float)}
            </span>
          )}
          {currencyInput === "CNY" && currencyData.bpi?.CNY?.rate_float && (
            <span>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: currencyInput,
              }).format(currencyData.bpi?.CNY?.rate_float)}
            </span>
          )}
          {currencyInput === "JPY" && currencyData.bpi?.JPY?.rate_float && (
            <span>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: currencyInput,
              }).format(currencyData.bpi?.JPY?.rate_float)}
            </span>
          )}
          {currencyInput === "PLN" && currencyData.bpi?.PLN?.rate_float && (
            <span>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: currencyInput,
              }).format(currencyData.bpi?.PLN?.rate_float)}
            </span>
          )}
        </Typography>
        <FormControl
          style={{ marginLeft: 10, display: "inline-flex", maxWidth: "25vw" }}
        >
          <Select
            value={currencyInput}
            onChange={handleChange}
            style={{ border: "none" }}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="CNY">CNY</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
            <MenuItem value="PLN">PLN</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Button
        variant="contained"
        style={{ display: "flex", marginTop: 10 }}
        onClick={handleOpen}
      >
        View History
      </Button>
    </Container>
  );
};

export default CurrencyDashboard;
