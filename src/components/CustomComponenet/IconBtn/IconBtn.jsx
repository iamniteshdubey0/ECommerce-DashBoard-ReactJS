import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { tokens } from "../../../theme";

const CustomIconButton = styled(IconButton)(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return { 
    backgroundColor:
      theme.palette.mode === "light"
        ? colors.whiteSmoke[500]
        : colors.oxfordBlue[500],
    margin: "0px 5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.whiteSmoke.main
          : theme.palette.oxfordBlue.main,
      color: theme.palette.primary.main,
    },
  };
});

const IconBtn = ({ children, ...props }) => {
  return <CustomIconButton {...props}>{children}</CustomIconButton>;
};

export default IconBtn;
