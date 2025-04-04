import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const MiniCard = ({ color, label, count, icon }) => {
  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        width: "100%",
        maxHeight: "80px",
        minHeight: "75px",
        backgroundImage: `linear-gradient(to right, ${theme.palette[color].main}, ${theme.palette[color].light})`,
        borderRadius: 2,
        color: "white",
      })}
    >
      <Grid container spacing={2} sx={{ p: 1, minHeight: "75px" }}>
        <Grid
          container
          size={12}
          sx={{ display: "flex", alignItems: "center", p: 1 }}
        >
          <Grid size={8}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ mb: 0, fontWeight: "bold" }}
            >
              {label}
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mb: 0, fontWeight: "bold" }}
            >
              {count || 0}
            </Typography>
          </Grid>
          <Grid size={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box
              component="div"
              sx={(theme) => ({
                backgroundColor: `${theme.palette[color].main}`,
                color: `${theme.palette[color].dark}`,
                p: 1,
                width: "45px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 1,
              })}
            >
              {icon}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MiniCard;
