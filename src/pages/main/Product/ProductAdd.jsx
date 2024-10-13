import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Footer from "../../../components/Footer/Footer";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import MenuItem from "@mui/material/MenuItem";

const category = ["mens", "womens", "children", "pets"];
const subCategory = ["Tee", "Shirt", "Pants", "Jacket", "cap"];

const ProductAdd = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
        title="Add New Product"
        text="Home"
        textlink="/"
      ></BreadcrumCustom>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid
          container
          size={7}
          sx={(theme) => ({
            p: 2,
            borderRadius: 2,
            backgroundColor:
              theme.palette.mode === "light"
                ? colors.whiteSmoke[100]
                : colors.oxfordBlue[300],
          })}
        >
          <Grid size={12}>
            <Divider textAlign="center" sx={{ mb: 2 }}>
              <Chip color="primary" label="Basic Information" size="small" />
            </Divider>
          </Grid>
          <Grid size={12}>
            <TextField
              id="productTitle"
              label="Title"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id="productDescription"
              label="Description"
              multiline
              rows={4}
            />
          </Grid>

          <Grid size={6}>
            <TextField
              id="category"
              select
              label="Category"
              defaultValue="children"
              size="small"
              fullWidth
            >
              {category.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={6}>
            <TextField
              id="subCategory"
              select
              label="Sub Category"
              defaultValue="Shirt"
              size="small"
              fullWidth
            >
              {subCategory.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={6}>
            <TextField
              id="brabnd"
              select
              label="Brand"
              defaultValue="Mango-C"
              size="small"
              fullWidth
            >
              {subCategory.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={6}>
            <TextField
              id="colors"
              label="Colors"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid size={6}>
            <TextField
              id="regularPrice"
              label="Regular Price"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid size={6}>
            <TextField
              id="discountedPrice"
              label="Discount Price"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid size={6}>
            <TextField
              id="sippingCharge"
              label="shipping Charge"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid size={6}>
            <TextField
              id="gst"
              label="GST"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              id="productTags"
              label="Tags"
              multiline
              rows={5}
            />
          </Grid>
        </Grid>

        <Grid
          container
          size={5}
          sx={(theme) => ({
            p: 2,
            borderRadius: 2,
            backgroundColor:
              theme.palette.mode === "light"
                ? colors.whiteSmoke[100]
                : colors.oxfordBlue[300],
          })}
        >
          <Grid size={12}>
            <Divider textAlign="left" sx={{ mb: 3 }}>
              <Chip color="primary" label="Basic Information" size="small" />
            </Divider>
            <TextField
              id="currentPassword"
              label="Current Password"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="newPassword"
              label="New Password"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="confirmNewPassword"
              label="Confirm New Password"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default ProductAdd;
