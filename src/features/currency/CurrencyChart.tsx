import React from "react";
import { Line } from "react-chartjs-2";
import { useAppSelector } from "../../app/hooks";
import moment from "moment";
import { Button, Typography, Box } from "@mui/material";

interface CartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }[];
}

interface CurrencyChartProps {
  setOpenModal: (value: boolean) => void;
}

export const CurrencyChart = (props: CurrencyChartProps) => {
  const { setOpenModal } = props;
  const { currencyHistory, currency } = useAppSelector(
    (state) => state.currency
  );

  const [datas, setData] = React.useState<CartData>({
    labels: [],
    datasets: [],
  });

  React.useEffect(() => {
    const tempDatasets: string[] = Object.keys(currencyHistory.bpi) || [];
    const tempDatalabels: number[] = Object.values(currencyHistory.bpi) || [];
    const tempData = {
      labels: tempDatasets.reverse().map((elt) => moment(elt).format("DD/MM")),
      datasets: [
        {
          label: currency,
          data: tempDatalabels,
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };
    setData(tempData);
  }, [currency, currencyHistory.bpi]);

  return (
    <Box style={{ display: "block", width: "80%", height: "80%" }}>
      <Box style={{ display: "flex", marginTop: 30, marginBottom: 30 }}>
        <Typography
          style={{ display: "inline-flex", flexGrow: 1 }}
          variant="h4"
        >
          History
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          style={{ display: "inline-flex" }}
          onClick={() => setOpenModal(false)}
        >
          Close
        </Button>
      </Box>
      <Line data={datas} />
    </Box>
  );
};
