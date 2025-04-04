import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { LinePlot, lineElementClasses } from "@mui/x-charts/LineChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const pData = [2400, 1398, 9800, 3908, 14800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const CardLineChart = ({ color, heading, value }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        width: "100%",
        maxHeight: "145px",
        minHeight: "110px",
        backgroundImage: `linear-gradient(to right, ${theme.palette[color].main}, ${theme.palette[color].light})`,
        borderRadius: 2,
        color: "white",
      })}
    >
      <Grid container spacing={2} sx={{ minHeight: "165px", p: 1 }}>
        <Grid
          size={12}
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid size={8}>
            <Typography variant="h3" sx={{fontWeight:'bold', mb:1}}>{value}</Typography>
            <Typography variant="subtitle1" sx={{textTransform:'capitalize'}}>{heading}</Typography>
          </Grid>
          <Grid size={4} sx={{ textAlign: "end" }}>
            <IconButton aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ChartContainer
            margin={{ top: 0 }}
            height={100}
            width={300}
            series={[{ type: "line", data: pData }]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
            sx={{
              [`& .${lineElementClasses.root}`]: {
                stroke:
                  theme.palette.mode === "light"
                    ? colors[color][200]
                    : colors[color][800],
                strokeWidth: 4,
              },
            }}
          >
            <LinePlot />
          </ChartContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardLineChart;
