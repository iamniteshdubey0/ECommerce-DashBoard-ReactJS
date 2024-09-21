import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSidebar } from "../../../components/Context/SidebarContext";
import CustomTimeline from "../../../components/CustomComponenet/CustomTimeline/CustomTimeline";
import Footer from "../../../components/Footer/Footer";
import CardBarChart from "../../../components/Charts/CardBarChart";
import StackedBarChart from "../../../components/Charts/StackedBarChart";
import PageViews from "../../../components/CustomComponenet/TableCustom/Pageviews";

const Crm = () => {
  const { isSidebarOpen } = useSidebar();
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
        title="Crm"
        text="Home"
        textlink="/dashboard"
      ></BreadcrumCustom>
      <Grid container spacing={1} sx={{ mt: 4 }}>
        <Grid size={6} sx={{ p: 1 }}>
          <CardBarChart
            color={"primary"}
            heading={"campaign sent"}
            value={"15458K"}
          ></CardBarChart>
        </Grid>
        <Grid size={6} sx={{ p: 1 }}>
          <CardBarChart
            color={"secondary"}
            heading={"engagements"}
            value={"12458.74K"}
          ></CardBarChart>
        </Grid>
        <Grid size={6} sx={{ p: 1 }}>
          <CardBarChart
            color={"primary"}
            heading={"conversions"}
            value={"10458.74K"}
          ></CardBarChart>
        </Grid>
        <Grid size={6} sx={{ p: 1 }}>
          <CardBarChart
            color={"secondary"}
            value={"9458.74K"}
            heading={"bounce rate"}
          ></CardBarChart>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid size={7} sx={{ p: 1 }}>
          <StackedBarChart></StackedBarChart>
        </Grid>
        <Grid size={5} sx={{ p: 1 }}>
        <PageViews />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid size={6} sx={{ p: 1 }}>
          <PageViews />
        </Grid>
        <Grid size={6} sx={{ p: 1 }}>
          <CustomTimeline />
        </Grid>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default Crm;
