import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { label: "Group A", value: 400, color: "#0088FE" },
  { label: "Group B", value: 300, color: "#00C49F" },
  { label: "Group C", value: 300, color: "#FFBB28" },
  { label: "Group D", value: 200, color: "#FF8042" },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const CPieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        height: "450px",
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
        <Typography variant="h4">orders overview</Typography>
        <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box component={"div"} sx={{display: "flex", alignItems: "center", justifyContent: "center", mt:0}}>
        <PieChart
          series={[
            {
              outerRadius: 80,
              innerRadius:25,
              cornerRadius: 5,
              paddingAngle: 2,
              data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 14,
            },
          }}
          {...sizing}
        />
      </Box>
    </Box>
  );
};

export default CPieChart;
