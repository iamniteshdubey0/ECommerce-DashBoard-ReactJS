import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardCustom from "../../../components/CustomComponenet/CardCustom/NormalCard";
import CardCustom2 from "../../../components/CustomComponenet/CardCustom/LargeCard";
import CPieChart from "../../../components/Charts/CPieChart";
import CBarChart from "../../../components/Charts/CBarChart";
import PopularClientTable from "../../../components/CustomComponenet/DataTable/PopularClientTable";
import CustomTimeline from "../../../components/CustomComponenet/CustomTimeline/CustomTimeline";
import Footer from "../../../components/Footer/Footer";
import DataTableSec from "../../../components/Sections/DataTableSec";
import TableCustom from "../../../components/CustomComponenet/DataTable/TableCustom";

const Dashboard = () => {
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
        title="Dashboard"
        text="Home"
        textlink="/charts"
      ></BreadcrumCustom>
      <Grid container spacing={2} sx={{ mt: {xs:2, md:4} }}>
        <Grid container size={{xs:12, md:8}}>
          <Grid size={{xs:12, md:6}} sx={{ p: 1 }}>
            <CardCustom color={"primary"} heading={"Total Users"}></CardCustom>
          </Grid>
          <Grid size={{xs:12, md:6}} sx={{ p: 1 }}>
            <CardCustom color={"success"} heading={"card2"}></CardCustom>
          </Grid>
          <Grid size={{xs:12, md:6}} sx={{ p: 1 }}>
            <CardCustom color={"error"} heading={"card3"}></CardCustom>
          </Grid>
          <Grid size={{xs:12, md:6}} sx={{ p: 1 }}>
            <CardCustom color={"secondary"} heading={"card4"}></CardCustom>
          </Grid>
        </Grid>
        <Grid size={{xs:12, md:4}}>
          <Grid size={12} sx={{ p: 1 }}>
            <CardCustom2 color="neutral" heading="card3" />
          </Grid>
        </Grid>
      </Grid>
      <DataTableSec label={"Best Selling"}>
        <TableCustom></TableCustom>
      </DataTableSec>
      <Grid container spacing={2} sx={{ mt: {xs:2, md:4} }}>
        <Grid size={{xs:12, md:8}} sx={{ p: 1 }}>
          <CBarChart />
        </Grid>
        <Grid size={{xs:12, md:4}} sx={{ p: 1 }}>
          <CPieChart />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: {xs:2, md:4} }}>
        <Grid size={{xs:12, md:6}} sx={{ p: 1 }}>
          <PopularClientTable />
        </Grid>
        <Grid size={{xs:12, md:6}} sx={{ p: 1 }}>
          <CustomTimeline />
        </Grid>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default Dashboard;
