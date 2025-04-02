import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import List from "@mui/material/List";


const CtListItem = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <List
      dense={true}
      disablePadding={true}
      sx={(theme) => ({
        width: "100%",
        overflowY: "scroll",
        height: "72vh",
        mt: 0.25,
        px: 0.25,
        "&::-webkit-scrollbar": {
          width: "3px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: "2px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
      })}
    >
      {children}
    </List>
  );
};

export default CtListItem;
