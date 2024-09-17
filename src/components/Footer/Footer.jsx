import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        height: "80px",
      }}
    >
      <Typography variant="subtitle" color="text.secondary">
        © All Rights Reserved by ♥ NiteshDubey
      </Typography>
    </Box>
  );
};

export default Footer;
