import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomTimeline from "../../../components/CustomComponenet/CustomTimeline/CustomTimeline";
import Footer from "../../../components/Footer/Footer";
import CardLineChart from "../../../components/Charts/CardLineChart";
import StackedBarChart from "../../../components/Charts/StackedBarChart";
import PageViews from "../../../components/CustomComponenet/DataTable/Pageviews";

const Analytics = () => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        p: {xs:0.5, md:2},
        overflowY: 'auto',
        maxHeight: "88vh",
        "&::-webkit-scrollbar": {
          width: {xs:'0px', md:'3px'},
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
        title="Analytics"
        text="Home"
        textlink="/dashboard"
      ></BreadcrumCustom>
      <Grid container spacing={1} sx={{ mt: 4 }}>
        <Grid size={{xs:12, md:3}} sx={{ p: 1 }}>
          <CardLineChart
            color={"error"}
            heading={"impressions"}
            value={"15458K"}
          ></CardLineChart>
        </Grid>
        <Grid size={{xs:12, md:3}} sx={{ p: 1 }}>
          <CardLineChart
            color={"secondary"}
            heading={"engagements"}
            value={"12458.74K"}
          ></CardLineChart>
        </Grid>
        <Grid size={{xs:12, md:3}} sx={{ p: 1 }}>
          <CardLineChart
            color={"success"}
            heading={"conversions"}
            value={"10458.74K"}
          ></CardLineChart>
        </Grid>
        <Grid size={{xs:12, md:3}} sx={{ p: 1 }}>
          <CardLineChart
            color={"primary"}
            value={"9458.74K"}
            heading={"bounce rate"}
          ></CardLineChart>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid size={{xs:12, md:7}} sx={{ p: 1 }}>
          <StackedBarChart></StackedBarChart>
        </Grid>
        <Grid size={{xs:12, md:5}} sx={{ p: 1 }}>
          <PageViews />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid size={{xs:12, md:6}} sx={{ p: 1 }}>
          <PageViews />
        </Grid>
        <Grid size={{xs:12, md:6}} sx={{ p: 1 }}>
          <CustomTimeline />
        </Grid>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default Analytics;
