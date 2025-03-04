import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box, Typography } from "@mui/material";
import Footer from "../../../components/Footer/Footer";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";

const ProducView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const proPics = [1, 2, 3, 4];
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
        title="Products View"
        text="Home"
        textlink="/"
      ></BreadcrumCustom>

      <Grid
        container
        size={12}
        sx={(theme) => ({
          mt: 5,
          p: 3,
          borderRadius: 2,
          maxHeight: "fit-content",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? colors.whiteSmoke[100]
              : colors.oxfordBlue[300],
        })}
      >
        <Grid size={4} sx={{ p: 1 }}>
          <Divider textAlign="left" sx={{ mb: 2 }}>
            <Chip color="teal" label="Product Gallery" size="small" />
          </Divider>

          <Grid size={12}>
            <Box
              sx={{
                height: "300px",
                width: "100%",
                p: 1,
                border: "1px dashed grey",
                borderRadius: "5px",
              }}
            ></Box>
          </Grid>
          <Grid
            container
            size={12}
            sx={{ mt: 2, justifyContent: "space-between" }}
          >
            {proPics.map((item) => (
              <Grid size={4}>
                <Box
                  sx={{
                    height: "60px",
                    width: "60px",
                    p: 1,
                    border: "1px dashed grey",
                    borderRadius: "5px",
                  }}
                ></Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid size={8} sx={{ p: 1 }}>
          <Divider textAlign="left" sx={{ mb: 2 }}>
            <Chip color="teal" label="Product Details" size="small" />
          </Divider>

          <Grid size={12} sx={{ px: 3 }}>
            <Typography variant="h4">
              Formal suits for men wedding slim fit 3 piece dress business party
              jacket
            </Typography>
          </Grid>
          <Grid container size={12} sx={{ p: 3 }}>
            <Grid size={2}>
              <Typography variant="h6">brand</Typography>
            </Grid>
            <Grid size={1}>
              <Typography variant="subtitle2">:</Typography>{" "}
            </Grid>
            <Grid size={9}>
              <Typography variant="subtitle2">brand</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12} sx={{ p: 1, mt: 2 }}>
          <Divider textAlign="left" sx={{ mb: 2 }}>
            <Chip color="teal" label="Product Description" size="small" />
          </Divider>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reprehenderit repellendus expedita esse cupiditate quos doloremque
            rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
            voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam
            debitis amet natus doloremque laudantium? Repudiandae, consequuntur,
            officiis quidem quo deleniti, autem non laudantium sequi error
            molestiae ducimus accusamus facere velit consectetur vero dolore
            natus nihil temporibus aspernatur quia consequatur? Consequuntur
            voluptate deserunt repellat tenetur debitis molestiae doloribus
            dicta. In rem illum dolorem atque ratione voluptates asperiores
            maxime doloremque laudantium magni neque ad quae quos quidem,
            quaerat rerum ducimus blanditiis reiciendis
          </Typography>
        </Grid>

        <Grid size={12} sx={{ p: 1, mt: 2 }}>
          <Divider textAlign="left" sx={{ mb: 2 }}>
            <Chip color="teal" label="Rating Analytics" size="small" />
          </Divider>
          <Grid
            container
            size={12}
            sx={{ px: 3, justifyContent: "space-around" }}
          >
            <Grid size={6}>
              <Box
                gap={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  my: 1,
                }}
              >
                <Typography variant="h4">5-Star</Typography>
                <Rating name="5 Star" value={5} readOnly size="large" />
                <Typography variant="h5">(500)</Typography>
              </Box>

              <Box
                gap={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  my: 1,
                }}
              >
                <Typography variant="h4">4-Star</Typography>
                <Rating name="4 Star" value={4} readOnly size="large" />
                <Typography variant="h5">(600)</Typography>
              </Box>

              <Box
                gap={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  my: 1,
                }}
              >
                <Typography variant="h4">3-Star</Typography>
                <Rating name="3 Star" value={3} readOnly size="large" />
                <Typography variant="h5">(211)</Typography>
              </Box>

              <Box
                gap={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  my: 1,
                }}
              >
                <Typography variant="h4">2-Star</Typography>
                <Rating name="2 Star" value={2} readOnly size="large" />
                <Typography variant="h5">(160)</Typography>
              </Box>

              <Box
                gap={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  my: 1,
                }}
              >
                <Typography variant="h4">1-Star</Typography>
                <Rating name="1 Star" value={1} readOnly size="large" />
                <Typography variant="h5">(100)</Typography>
              </Box>
            </Grid>
            <Grid size={6} sx={{ my: 1, justifyContent: "center", alignItems:'center' }}>
              <Typography variant="h5">Total Review (38)</Typography>
              <Typography sx={{ fontSize: "60px" }}>4.5</Typography>
              <Rating name="4.5 Star" value={4.5} readOnly size="medium" />
              <Typography variant="h5">Your Average Rating Star</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer></Footer>
    </Box>
  );
};

export default ProducView;
