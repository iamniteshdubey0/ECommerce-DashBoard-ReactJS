import React from "react";
import {Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";


const ProductTree = ({itemKey, itemValue}) => {
  return (
    <Box sx={{my:1}}>
      <Grid spacing={1} container>
        <Grid size={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {itemKey}
          </Typography>
        </Grid>
        <Grid size={1}>
          <Typography variant="h5">:</Typography>
        </Grid>
        <Grid size={8}>
          <Typography variant="h5">{itemValue}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductTree;
