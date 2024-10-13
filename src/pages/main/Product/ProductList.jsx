import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MiniCard from "../../../components/CustomComponenet/CardCustom/MiniCard";
import DataTableSec from "../../../components/Sections/DataTableSec";
import TableCustom from "../../../components/CustomComponenet/DataTable/TableCustom";
import Footer from "../../../components/Footer/Footer";
import PRODUCTS_LIST from "../../../Constant/ProductListCard";

const ProductList = () => {
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
      <BreadcrumCustom
        title="Products List"
        text="Home"
        textlink="/"
      ></BreadcrumCustom>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid container size={12}>
          {PRODUCTS_LIST.map((item) => {
            return (
              <Grid size={4} sx={{ p: 1 }}>
                <MiniCard
                  color={item.color}
                  label={item.label}
                  count={item.count}
                  icon={item.icon}
                ></MiniCard>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <DataTableSec label={"Products"}>
        <TableCustom></TableCustom>
      </DataTableSec>
      <Footer></Footer>
    </Box>
  );
};

export default ProductList;
