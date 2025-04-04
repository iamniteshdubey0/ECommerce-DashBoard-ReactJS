import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MiniCard from "../../../components/CustomComponenet/CardCustom/MiniCard";
import DataTableSec from "../../../components/Sections/DataTableSec";
import TableCustom from "../../../components/CustomComponenet/DataTable/TableCustom";
import Footer from "../../../components/Footer/Footer";
import INVOICE_LIST from "../../../Constant/InvoiceList";

const InvoiceList = () => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        p: { xs: 0.5, md: 2 },
        overflowY: "auto",
        maxHeight: "88vh",
        "&::-webkit-scrollbar": {
          width: { xs: "0px", md: "3px" },
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
        title="Invoice List"
        text="Home"
        textlink="/"
      ></BreadcrumCustom>
      <Grid container spacing={2} sx={{ mt: { xs: 2, md: 4 } }}>
        <Grid container size={12}>
          {INVOICE_LIST.map((item) => {
            return (
              <Grid size={{ xs: 12, md: 4 }} sx={{ p: 1 }}>
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
      <DataTableSec label={"Deals "}>
        <TableCustom></TableCustom>
      </DataTableSec>
      <Footer></Footer>
    </Box>
  );
};

export default InvoiceList;

