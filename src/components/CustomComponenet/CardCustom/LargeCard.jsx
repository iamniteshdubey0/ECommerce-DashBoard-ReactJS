import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ChipCustom from "../ChipCustom/ChipCustom";
import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { useTheme } from "@mui/material/styles";

const CardCustom2 = ({ color, heading }) => {
  const theme = useTheme(); // Access the theme

  // Ensure color exists in theme.palette
  const color500 = theme.palette[color]?.dark;
  const color100 = theme.palette[color]?.main;

  if (!color500 || !color100) {
    console.warn(`Color ${color} with shades 500 and 100 is not defined in the theme.`);
  }

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        minHeight: "360px",
        maxHeight: "360px",
        backgroundImage: color500 && color100 ? `linear-gradient(to right, ${color500}, ${color100})` : "none",
        borderRadius: 2,
        color: "white",
      }}
    >
      <Grid container spacing={2} sx={{ p: 1, maxHeight: "100%" }} gap={0}>
        <Grid container size={12} sx={{ p: 1 }}>
          <Grid size={8} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ mb: 0, fontWeight: "bold", textTransform: "capitalize" }}
            >
              {heading}
            </Typography>
          </Grid>
          <Grid size={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton edge="end" aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          container
          size={12}
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
            mt: -1,
            maxHeight: "100%",
          }}
        >
          <Box
            component={"div"}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mb: 0, fontWeight: "semibold", fontSize: "28px" }}
            >
              $3,787,681.00
            </Typography>
            <ChipCustom
              text={"+ 95%"}
              color={color}
              varient={"bg-transparent"}
            ></ChipCustom>
          </Box>

          <Typography variant="caption" gutterBottom sx={{ mb: 0 }}>
            $3,578.90 in last month
          </Typography>
          <LineChart
            sx={{
              background: "transparent",
              borderRadius: 1,
              "& .MuiChartsGrid-line": {
                strokeDasharray: 3,
              },
            }}
            grid={{ vertical: true, horizontal: true }}
            margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
              },
            ]}
            height={200}
            slots={{
              mark: "none",
              legend: "none",
              axisLine: "none",
              line: "none",
              axisLabel: "none",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardCustom2;
