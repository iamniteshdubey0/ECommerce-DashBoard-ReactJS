import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { BarChart } from "@mui/x-charts/BarChart";

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

const CardBarChart = ({ color, heading, value }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      elevation={2}
      sx={(theme) => ({
        p: 1,
        width: "100%",
        maxHeight: "240px",
        minHeight: "160px",
        borderRadius: 2,
        border: "none",
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[100]
            : colors.oxfordBlue[300],
      })}
    >
      <Grid container spacing={2} sx={{ minHeight: "165px", p: 1 }}>
        <Grid
          size={5}
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            p: 0.5,
          }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: colors[color][500],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: colors.whiteSmoke[500],
            }}
          >
            <LocalShippingIcon />
          </Box>
          <Box>
            <Typography variant="h2" sx={{ mb: 0, fontWeight: "bold" }}>
              5485
            </Typography>
            <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
              {heading}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              sx={{
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                color: theme.palette.success.main,
              }}
            >
              <ArrowUpwardIcon fontSize="small" /> 45%
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ mb: 0, mx: 1, textTransform: "capitalize", fontSize:'12px' }}
            >
              Since last week
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={7}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxHeight: "180px",
          }}
        >
          <BarChart
            width={500}
            height={250}
            colors={[colors[color][500]]}
            borderRadius={"10"}
            margin={{ top: 0 }}
            series={[{ data: pData, label: "pv", id: "pvId", stack: "stack1" }]}
            xAxis={[
              { data: xLabels, scaleType: "band", categoryGapRatio: 0.6 },
            ]}
            yAxis={[{ disableTicks: "true" }]}
            leftAxis={null}
            slots={{
              axisLine: "none",
              axisTick: "none",
              axisLabel: "none",
              legend: "none",
            }}
            resolveSizeBeforeRender={true}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardBarChart;
