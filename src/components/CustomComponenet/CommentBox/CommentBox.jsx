import React from "react";
import { Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const CommentBox = ({username, date, comment}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid
      container
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[100]
            : colors.oxfordBlue[500],
        minHeight: "120px",
        width: "100%",
        borderRadius: 2,
        border: `1px solid ${colors.primary[500]}`,
        my:2,
      })}
    >
      <Grid container size={12} sx={{ px: 2, py: 2 }}>
        <Grid size={6}>
          <Typography variant="h6">{username}</Typography>
        </Grid>
        <Grid size={6} sx={{ textAlign: "end" }}>
          <Button sx={{ mx: 1 }} variant="contained" size="small">
            Relpy
          </Button>
          <Button
            sx={{ mx: 1, color: colors.error[500] }}
            variant="outlined"
            size="small"
          >
            Delete
          </Button>
        </Grid>
      </Grid>
      <Grid size={12} sx={{ px: 2, py: 1, mt: -2 }}>
        <Typography variant="body">
          {comment}
        </Typography>
      </Grid>
      <Grid size={12} sx={{ px: 2, py: 1, mt: -2, textAlign: "end" }}>
        <Typography variant="caption">{date}</Typography>
      </Grid>
    </Grid>
  );
};

export default CommentBox;
