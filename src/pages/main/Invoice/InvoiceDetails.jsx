import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { tokens } from "../../../theme";
import Grid from "@mui/material/Grid2";
import SubTotal from "../../../components/CustomComponenet/DataTable/SubTotal";
import InvoiceItemList from "../../../components/CustomComponenet/DataTable/InvoiceItemList";

const InvoiceDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
        title="Invoice Details"
        text="Home"
        textlink="/"
      ></BreadcrumCustom>
      <Paper
        elevation={0}
        sx={(theme) => ({
          mt: {xs:2, md:3},
          p: 1,
          width: "100%",
          minHeight: "160px",
          borderRadius: 2,
          border: "none",
          backgroundColor:
            theme.palette.mode === "light"
              ? colors.whiteSmoke[100]
              : colors.oxfordBlue[300],
        })}
      >
        <Grid container spacing={2}>
          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "center", p: 1 }}
          >
            <Typography variant="h4">Invoice #989555</Typography>
          </Grid>
          <Grid
            container
            size={12}
            sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
          >
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography
                sx={{
                  mb: 2,
                }}
                variant="h5"
              >
                Billing Address
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textWrap: "wrap" }}
              >
                Office 25/B, Road 30, West jalkuri, Fatullah, Narayanganj 1265.
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textWrap: "wrap" }}
              >
                +09090909090
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textWrap: "wrap" }}
              >
                nonow@gmail.com
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }} sx={{ textAlign: "right" }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                }}
              >
                Shipping Address
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textWrap: "wrap" }}
              >
                Office 25/B, Road 30, West jalkuri, Fatullah, Narayanganj 1265.
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textWrap: "wrap" }}
              >
                +09090909090
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textWrap: "wrap" }}
              >
                nonow@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <Grid size={12}>
            <InvoiceItemList></InvoiceItemList>
          </Grid>
          <Grid
            container
            size={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Grid size={{ xs: 8, md: 4 }}>
              <SubTotal></SubTotal>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Divider></Divider>
          </Grid>

          <Grid
            size={12}
            sx={{ display: "flex", justifyContent: "center", p: 1 }}
          >
            <Typography variant="body2">
              Thank you for ordering greeny. We offer a 7-day return policy on
              all products. If you have any complain about this order, please
              call or email us. (VAT has been calculated as per GO
              02/Mushak/2019). This is a sytem generated invoice and no
              signature or seal is required.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InvoiceDetails;
