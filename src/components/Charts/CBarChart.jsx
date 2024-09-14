import { Box, Typography } from "@mui/material";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

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
        <Typography variant="h4">orders overview</Typography>
        <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
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
          height={300}
          borderRadius={5}
          grid={{ horizontal: true }}
          slots={{
            legend: 'none',
            axisLabel:'none'
          }}
          series={[
            { data: pData, label: "pv", id: "pvId" },
            { data: uData, label: "uv", id: "uvId" },
          ]}
        />
      </Box>
    </Box>
  );
};

export default CBarChart;
