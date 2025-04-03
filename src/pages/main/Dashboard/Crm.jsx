import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSidebar } from "../../../components/Context/SidebarContext";
import CustomTimeline from "../../../components/CustomComponenet/CustomTimeline/CustomTimeline";
import Footer from "../../../components/Footer/Footer";
import CardBarChart from "../../../components/Charts/CardBarChart";
import StackedBarChart from "../../../components/Charts/StackedBarChart";
import PageViews from "../../../components/CustomComponenet/DataTable/Pageviews";

const Crm = () => {
  const { isSidebarOpen } = useSidebar();
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
        title="Crm"
        text="Home"
        textlink="/dashboard"
      ></BreadcrumCustom>
      <Grid container spacing={1} sx={{ mt: { xs: 2, md: 4 } }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
          <CardBarChart
            color={"primary"}
            heading={"campaign sent"}
            value={"15458K"}
          ></CardBarChart>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
          <CardBarChart
            color={"secondary"}
            heading={"engagements"}
            value={"12458.74K"}
          ></CardBarChart>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
          <CardBarChart
            color={"success"}
            heading={"conversions"}
            value={"10458.74K"}
          ></CardBarChart>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
          <CardBarChart
            color={"error"}
            value={"9458.74K"}
            heading={"bounce rate"}
          ></CardBarChart>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: { xs: 2, md: 4 } }}>
        <Grid size={{ xs: 12, md: 7 }} sx={{ p: 1 }}>
          <StackedBarChart></StackedBarChart>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }} sx={{ p: 1 }}>
          <PageViews />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: { xs: 2, md: 4 } }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
          <PageViews />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 1 }}>
          <CustomTimeline />
        </Grid>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default Crm;
