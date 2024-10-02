import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Footer from "../../../components/Footer/Footer";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";

const UserProfile = () => {
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
        title="My Profile"
        text="Home"
        textlink="/"
      ></BreadcrumCustom>
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid size={4}>
          <Box
            sx={(theme) => ({
              p: 2,
              borderRadius: 2,
              backgroundColor:
                theme.palette.mode === "light"
                  ? colors.whiteSmoke[100]
                  : colors.oxfordBlue[300],
            })}
          >
            <Box
              component="div"
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ width: "60px", height: "60px" }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <Box
                  component="div"
                  sx={{
                    textAlign: "left",
                    ml: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      m: 0,
                      mt: 1,
                      textTransform: "capitalize",
                      lineHeight: "0.5",
                    }}
                    variant="body1"
                  >
                    Nitesh Dubey
                  </Typography>
                  <Typography
                    sx={{ m: 0, textTransform: "capitalize" }}
                    variant="caption"
                  >
                    @iamnit
                  </Typography>
                </Box>
              </Box>
              <Box>
                <IconButton aria-label="setting">
                  <EditIcon fontSize="small"></EditIcon>
                </IconButton>
              </Box>
            </Box>

            <Box component="div" sx={{ mb: 3, p: 1 }}>
              <Divider textAlign="left">Communication</Divider>
              <List dense="true">
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Single-line item" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Single-line item" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Single-line item" />
                </ListItem>
              </List>
            </Box>

            <Box component="div" sx={{ mb: 3, p: 1 }}>
              <Divider textAlign="left">Bio Data</Divider>
              <Typography variant="subtitle1" gutterBottom>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur subtitle2. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Quos blanditiis tenetur
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default UserProfile;
