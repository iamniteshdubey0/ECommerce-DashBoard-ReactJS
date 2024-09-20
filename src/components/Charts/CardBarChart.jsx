import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
import ChipCustom from "../CustomComponenet/ChipCustom/ChipCustom";

import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const CardBarChart = ({ color, heading, value }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        width: "100%",
        maxHeight: "200px",
        minHeight: "160px",
        backgroundImage: `linear-gradient(to right, ${theme.palette[color].main}, ${theme.palette[color].light})`,
        borderRadius: 2,
        color: "white",
      })}
    >
      <Grid container spacing={2} sx={{ minHeight: "165px", p: 1 }}>
        <Grid
          size={5}
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <LocalShippingIcon />
          <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
            {heading}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ChipCustom text={"+ 95%"} color={color}></ChipCustom>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ mb: 0, mx: 1, textTransform: "capitalize" }}
            >
              last month
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={7}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <BarChart
            width={400}
            height={250}
            borderRadius={"10"}
            margin={{ top: 0 }}
            series={[
              { data: pData, label: "pv", id: "pvId", stack: "stack1" },
              { data: uData, label: "uv", id: "uvId", stack: "stack1" },
            ]}
            xAxis={[
              { data: xLabels, scaleType: "band", categoryGapRatio: 0.6 },
            ]}
            yAxis={[{ disableTicks: "true" }]}
            slots={{
              axisLine: "none",
              axisTick: "none",
              axisLabel:"none",
            }}
            resolveSizeBeforeRender = {true}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardBarChart;
