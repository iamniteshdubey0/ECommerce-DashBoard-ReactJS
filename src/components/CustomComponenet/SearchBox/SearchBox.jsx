import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconBtn from "../IconBtn/IconBtn";
import { useTheme } from "@mui/material";
import {tokens } from "../../../theme";

const SearchBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[200]
            : colors.oxfordBlue[300],
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          "& .MuiInputBase-input": {
            borderRadius: 2,
            position: "relative",
            backgroundColor:
              theme.palette.mode === "light"
                ? colors.whiteSmoke[500]
                : colors.oxfordBlue[500],
            fontSize: 16,
            width: "auto",
            padding: "8px 10px",
          },
        }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconBtn
        type="button"
        sx={{ background: "transparent" }}
        aria-label="search"
      >
        <SearchIcon fontSize="small" />
      </IconBtn>
    </Paper>
  );
};

export default SearchBox;
