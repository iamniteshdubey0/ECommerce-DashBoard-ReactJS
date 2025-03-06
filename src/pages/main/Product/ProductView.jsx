import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box, Typography, Button } from "@mui/material";
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
  const proRating = [
    { id: "5-Star", label: 5, rating: 200 },
    { id: "4-Star", label: 4, rating: 160 },
    { id: "3-Star", label: 3, rating: 110 },
    { id: "2-Star", label: 2, rating: 80 },
    { id: "1-Star", label: 1, rating: 15 },
  ];

  const totalRating = proRating.reduce(
    (sum, rating) => sum + rating.label * rating.rating,
    0
  );
  const totalReview = proRating.reduce((sum, rating) => sum + rating.rating, 0);
  const averageRating = (totalRating / totalReview).toFixed(1);
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
              {proRating.map((rating) => {
                return (
                  <Box
                    key={rating.id}
                    gap={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      my: 1,
                    }}
                  >
                    <Typography variant="h4">{rating.id}</Typography>
                    <Rating
                      name="{rating.id}"
                      value={rating.label}
                      readOnly
                      size="large"
                    />
                    <Typography variant="h5">({rating.rating})</Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid
              size={6}
              sx={{ my: 1, justifyContent: "center", alignItems: "center" }}
            >
              <Typography variant="h5">Total Review ({totalReview})</Typography>
              <Typography sx={{ fontSize: "60px" }}>{averageRating}</Typography>
              <Rating
                name={`$(averageRating) + "Star`}
                value={averageRating}
                readOnly
                size="medium"
              />
              <Typography variant="h5">Your Average Rating Star</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={12} sx={{ p: 1, mt: 2 }}>
          <Divider textAlign="left" sx={{ mb: 2 }}>
            <Chip color="teal" label="Customer Review" size="small" />
          </Divider>

          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.palette.mode === "light"
                  ? colors.whiteSmoke[400]
                  : colors.oxfordBlue[600],
              minHeight: "400px",
              width: "100%",
              borderRadius: 2,
              p: 2,
            })}
          >
            <Grid
              container
              sx={(theme) => ({
                backgroundColor:
                  theme.palette.mode === "light"
                    ? colors.whiteSmoke[100]
                    : colors.oxfordBlue[400],
                minHeight: "120px",
                width: "100%",
                borderRadius: 2,
                border: `1px solid ${colors.primary[500]}`,
              })}
            >
              <Grid container size={12} sx={{ px: 2, py: 2 }}>
                <Grid size={6}>
                  <Typography variant="h6">Username</Typography>
                </Grid>
                <Grid size={6} sx={{ textAlign: "end" }}>
                  <Button sx={{ mx: 1 }} variant="contained" size="small">
                    Relpy
                  </Button>
                  <Button
                    sx={{ mx: 1, color: colors.error[500] }}
                    variant="outlined"
                    size="small"
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
              <Grid size={12} sx={{ px: 2, py: 1, mt: -2 }}>
                <Typography variant="body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia quibusdam ipsum iste quo corporis sequi at eaque
                  autem repudiandae est voluptatibus tempore rerum a, odit eos?
                  Enim officiis voluptatem quisquam.
                </Typography>
              </Grid>
              <Grid size={12} sx={{ px: 2, py: 1, mt: -2, textAlign: "end" }}>
                <Typography variant="caption">Lorem ipsum</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Footer></Footer>
    </Box>
  );
};

export default ProducView;
