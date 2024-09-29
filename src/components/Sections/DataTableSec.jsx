import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const DataTableSec = ({ label, children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Paper
      elevation={2}
      component="section"
      sx={{
        my: 5,
        p: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[100]
            : colors.oxfordBlue[200],
        borderRadius: 2,
      }}
    >
      <Grid container spacing={2} gap={0}>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Typography variant="h6" sx={{ textTransform: "capitalize", mb: 0 }}>
            {label}
          </Typography>
          <IconButton edge="end" aria-label="delete">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid size={12}>{children}</Grid>
      </Grid>
    </Paper>
  );
};

export default DataTableSec;
