import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Footer from "../../../components/Footer/Footer";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import MenuItem from "@mui/material/MenuItem";
import CollectionsIcon from "@mui/icons-material/Collections";

const category = ["mens", "womens", "children", "pets"];
const subCategory = ["Tee", "Shirt", "Pants", "Jacket", "cap"];

const ProductAdd = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const items = Array.from({ length: 5 });
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

        <Grid container size={5}>
          <Grid
            container
            size={12}
            sx={(theme) => ({
              p: 2,
              borderRadius: 2,
              maxHeight: "fit-content",
              backgroundColor:
                theme.palette.mode === "light"
                  ? colors.whiteSmoke[100]
                  : colors.oxfordBlue[300],
            })}
          >
            <Grid size={12}>
              <Divider textAlign="center" sx={{ mb: 2 }}>
                <Chip color="primary" label="Organization" size="small" />
              </Divider>
            </Grid>
            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="addCategory"
                label="Add Category"
                variant="outlined"
                size="small"
                fullWidth
              />

              <Button variant="outlined" sx={{ ml: 2 }}>
                Add
              </Button>
            </Grid>
            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="addBrand"
                label="Add Brand"
                variant="outlined"
                size="small"
                fullWidth
              />

              <Button variant="outlined" sx={{ ml: 2 }}>
                Add
              </Button>
            </Grid>

            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="addColor"
                label="Add Color"
                variant="outlined"
                size="small"
                fullWidth
              />

              <Button variant="outlined" sx={{ ml: 2 }}>
                Add
              </Button>
            </Grid>
            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="addSize"
                label="Add Size"
                variant="outlined"
                size="small"
                fullWidth
              />

              <Button variant="outlined" sx={{ ml: 2 }}>
                Add
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            size={12}
            sx={(theme) => ({
              p: 2,
              borderRadius: 2,
              maxHeight: "fit-content",
              backgroundColor:
                theme.palette.mode === "light"
                  ? colors.whiteSmoke[100]
                  : colors.oxfordBlue[300],
            })}
          >
            <Grid size={12}>
              <Divider textAlign="center" sx={{ mb: 2 }}>
                <Chip color="primary" label="Specification" size="small" />
              </Divider>
            </Grid>
            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="addCategory"
                label="Add Category"
                variant="outlined"
                size="small"
                fullWidth
              />

              <Button variant="outlined" sx={{ ml: 2 }}>
                Add
              </Button>
            </Grid>
            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="addBrand"
                label="Add Brand"
                variant="outlined"
                size="small"
                fullWidth
              />

              <Button variant="outlined" sx={{ ml: 2 }}>
                Add
              </Button>
            </Grid>

            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="addColor"
                label="Add Color"
                variant="outlined"
                size="small"
                fullWidth
              />

              <Button variant="outlined" sx={{ ml: 2 }}>
                Add
              </Button>
            </Grid>
            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                id="addSize"
                label="Add Size"
                variant="outlined"
                size="small"
                fullWidth
              />

              <Button variant="outlined" sx={{ ml: 2 }}>
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        size={12}
        sx={(theme) => ({
          mt: 5,
          p: 2,
          borderRadius: 2,
          maxHeight: "fit-content",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? colors.whiteSmoke[100]
              : colors.oxfordBlue[300],
        })}
      >
        <Grid size={12}>
          <Divider textAlign="center" sx={{ mb: 2 }}>
            <Chip color="primary" label="Media and Published" size="small" />
          </Divider>
        </Grid>
        <Grid
          container
          spacing={1}
          size={12}
          sx={{
            p: 1,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            overflowX: "auto",
            scrollbarWidth: "thin", // For Firefox
            "&::-webkit-scrollbar": {
              height: "8px",
            },
          }}
        >
          {items.map((_, id) => {
            return (
              <Grid
                key={id}
                size={3}
                sx={(theme) => ({
                  flex: "0 0 auto",
                  p: 1,
                  borderRadius: 2,
                  border: "1px dashed gray",
                  height: "165px",
                  width: "165px",
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? colors.whiteSmoke[200]
                      : colors.oxfordBlue[400],
                  "&:hover": {
                    border: "2px dashed",
                    borderColor: colors.warning[500],
                    cursor: "pointer",
                  },
                })}
              >
                {id === items.length - 1 && (
                  <label
                    htmlFor="file-upload"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <input
                      type="file"
                      id="file-upload"
                      style={{ display: "none" }}
                    />
                    <CollectionsIcon
                      sx={{
                        fontSize: "80px",
                        color: colors.whiteSmoke[600],
                      }}
                    ></CollectionsIcon>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: colors.whiteSmoke[600] }}
                    >
                      Image Upload
                    </Typography>
                  </label>
                )}
              </Grid>
            );
          })}
        </Grid>
        <Grid size={12} sx={{mt:3}}>
            <Button variant="contained" fullWidth color="primary">View And Publish</Button>
        </Grid>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default ProductAdd;
