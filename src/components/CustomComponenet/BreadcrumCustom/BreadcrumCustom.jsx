import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadcrumCustom = ({ textlink, text, title, sText }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Grid
      container
      spacing={2}
      role="presentation"
      onClick={handleClick}
      sx={(theme) => ({
        p: 2,
        borderRadius: 2,
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[100]
            : colors.oxfordBlue[300],
      })}
    >
      <Grid
        size={{ xs: 12, sm: 12, md: 8 }}
        sx={{
          textAlign: {
            xs: "center",
            md:'left'
          },
        }}
      >
        <Typography variant="h4" sx={{ color: "text.primary", fontWeight:600 }}>
          {title}
        </Typography>
      </Grid>
      <Grid
        size={{xs:12, sm: 12, md: 4 }}
        sx={{
          display: "flex",
          justifyContent: {
            xs:'center',
            md:'flex-end'
          },
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            to={textlink}
            style={{
              color: theme.palette.primary.main,
            }}
          >
            {text}
          </Link>
          {sText && (
            <Link
              style={{
                color: theme.palette.primary.main,
              }}
              to=""
            >
              {sText}
            </Link>
          )}
          <Typography fontSize="small" sx={{ color: "text.primary" }}>
            {title}
          </Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};

export default BreadcrumCustom;
