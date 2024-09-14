import { Box, Typography } from "@mui/material";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InputAdornment from "@mui/material/InputAdornment";
import ShopTwoTwoToneIcon from "@mui/icons-material/ShopTwoTwoTone";
import BookmarksTwoToneIcon from "@mui/icons-material/BookmarksTwoTone";
import FilterNoneTwoToneIcon from "@mui/icons-material/FilterNoneTwoTone";

const getTotal = (data) => {
  return data.reduce((a, b) => a + b, 0);
};

const data = [
  {
    label: "Invested",
    icon: (
      <ShopTwoTwoToneIcon sx={{ fontSize: "50px", mr: 2, color: "#ef476f" }} />
    ),
    color: "#ef476f",
    barData: [1000, 1500, 800, 1180, 1230, 2390, 1690],
  },
  {
    label: "Earning",
    icon: (
      <BookmarksTwoToneIcon
        sx={{ fontSize: "50px", mr: 2, color: "#00C49F" }}
      />
    ),
    color: "#00C49F",
    barData: [2000, 1000, 2500, 1580, 1040, 2990, 1090],
  },
  {
    label: "Expeneses",
    icon: (
      <FilterNoneTwoToneIcon
        sx={{ fontSize: "50px", mr: 2, color: "#FF8042" }}
      />
    ),
    color: "#FF8042",
    barData: [1000, 800, 700, 340, 410, 790, 890],
  },
];

const revenueYears = ["Year 2024", "Year 2023", "Year 2022", "Year 2021"];

const CBarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        minHeight: "500px",
        maxHeight: "550px",
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
        <Typography variant="h4">Revenue Report</Typography>
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
      <Grid
        container
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        spacing={2}
      >
        {data.map((item) => (
          <Grid
            key={item.label}
            size={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.icon}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? colors.oxfordBlue[200]
                      : colors.whiteSmoke[300],
                }}
              >
                {item.label}
              </Typography>
              <Typography variant="h4" fontWeight={"bold"}>
                {`₹ ${getTotal(item.barData)} k`}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
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
          borderRadius={5}
          grid={{ horizontal: true }}
          slots={{
            legend: "none",
            axisLabel: "none",
            axisTick: "none",
          }}
          series={data.map((item) => ({
            data: item.barData,
            id: item.label,
            label: item.label,
          }))}
          colors={data.map((item) => item.color)}
        />
      </Box>
    </Box>
  );
};

export default CBarChart;
