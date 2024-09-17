import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InputAdornment from "@mui/material/InputAdornment";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [
  4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000, 2780, 1890,
];
const pData = [
  2400, 1398, 9800, 3908, 4800, 3800, 4300, 2400, 1398, 9800, 3908, 4800,
];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Junre",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dev",
];
const revenueYears = ["Year 2024", "Year 2023", "Year 2022", "Year 2021"];

const StackedBarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        minHeight: "400px",
        maxHeight: "450px",
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[100]
            : colors.oxfordBlue[300],
        borderRadius: 2,
        p: 1,
      }}
    >
      <Box
        component={"div"}
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">visitors device</Typography>
        <TextField
          id="selectYear"
          select
          label="Select Year"
          defaultValue="Year 2024"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            },
          }}
        >
          {revenueYears.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 0,
        }}
      >
        <BarChart
          width={600}
          height={400}
          borderRadius={"10"}
          series={[
            { data: pData, label: "pv", id: "pvId", stack: "total" },
            { data: uData, label: "uv", id: "uvId", stack: "total" },
          ]}
          xAxis={[{ data: xLabels, scaleType: "band", categoryGapRatio: 0.6 }]}
          yAxis={[{disableTicks:"true"}]}
          slots={{
            axisLine:'none',
            axisTick:'none'
          }}
          
        />
      </Box>
    </Box>
  );
};

export default StackedBarChart;
