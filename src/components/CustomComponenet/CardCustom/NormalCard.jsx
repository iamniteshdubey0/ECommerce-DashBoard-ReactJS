import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import PeopleIcon from "@mui/icons-material/People";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ChipCustom from "../ChipCustom/ChipCustom";
import { Box } from "@mui/material";

const CardCustom = ({ color, heading }) => {
  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        width: "100%",
        maxHeight: "165px",
        minHeight: "130px",
        backgroundImage: `linear-gradient(to right, ${theme.palette[color].main}, ${theme.palette[color].light})`,
        borderRadius: 2,
        color: "white",
      })}
    >
      <Grid container spacing={2} sx={{ p: 1, minHeight:'165px' }}>
        <Grid container size={12} sx={{ p: 1 }}>
          <Grid size={8} sx={{display:"flex", alignItems:"center"}}>
            <ChipCustom text={"+ 95%"} color={color}></ChipCustom>
            <Typography variant="body1" gutterBottom sx={{ mb: 0, mx:1, textTransform:"capitalize" }}>
            last month
            </Typography>
          </Grid>
          <Grid size={4} sx={{ display: "flex", justifyContent: "flex-end", pr:0.5 }}>
            <IconButton edge="end" aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container size={12} sx={{display:"flex", alignItems:"center", p:1}}>
          <Grid size={8}>
            <Typography variant="body1" gutterBottom sx={{ mb: 0, fontWeight:"bold" }}>
              {heading}
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ mb: 0, fontWeight:"bold" }}>
              277
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
              <PeopleIcon fontSize="medium" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardCustom;
