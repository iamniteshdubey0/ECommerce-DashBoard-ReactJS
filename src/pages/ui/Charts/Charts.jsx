import React from "react";
import { Box } from "@mui/material";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";

const Charts = () => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        p: 2,
        overflowY: "auto",
        maxHeight: "88vh",
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
      <BreadcrumCustom title="Charts" text="Home" textlink='/charts'></BreadcrumCustom>
    </Box>
  );
};

export default Charts;
