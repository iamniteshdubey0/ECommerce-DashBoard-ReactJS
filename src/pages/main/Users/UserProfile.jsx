import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box, Button, Typography } from "@mui/material";
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
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import MapIcon from "@mui/icons-material/Map";
import MiniCard from "../../../components/CustomComponenet/CardCustom/MiniCard";
import CustomTimeline from "../../../components/CustomComponenet/CustomTimeline/CustomTimeline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const UserProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
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
        <Grid size={5}>
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
                <IconButton aria-label="setting" onClick={handleClickOpen()}>
                  <EditIcon fontSize="small"></EditIcon>
                </IconButton>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="scroll-dialog-title"
                  aria-describedby="scroll-dialog-description"
                >
                  <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                  <DialogContent >
                    <DialogContentText
                      id="scroll-dialog-description"
                      ref={descriptionElementRef}
                      tabIndex={-1}
                    >
                      {[...new Array(50)]
                        .map(
                          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                        )
                        .join("\n")}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Box>

            <Box component="div" sx={{ mb: 1, p: 1 }}>
              <Divider textAlign="left">Communication</Divider>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="neutral" />
                  </ListItemIcon>
                  <ListItemText primary="1234123412" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="neutral" />
                  </ListItemIcon>
                  <ListItemText primary="demo@example.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon color="neutral" />
                  </ListItemIcon>
                  <ListItemText primary="example.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MapIcon color="neutral" />
                  </ListItemIcon>
                  <ListItemText primary="1Hd- 50, 010 Avenue, NY 90001 United States" />
                </ListItem>
              </List>
            </Box>

            <Box component="div" sx={{ mb: 1, p: 1 }}>
              <Divider textAlign="left">Bio Data</Divider>
              <Typography
                variant="body2"
                sx={{ mt: 1, fontSize: "14px", color: "text.secondary" }}
                gutterBottom
              >
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quos blanditiis tenetur subtitle2. Lorem ipsum dolor sit
              </Typography>
            </Box>

            <Box component="div" sx={{ mb: 1, p: 1 }}>
              <Divider textAlign="left" sx={{ mb: 1 }}>
                Social Media
              </Divider>
              <Button
                variant="contained"
                sx={{ mx: 1, backgroundColor: colors.teal[500] }}
                disableElevation
              >
                LinkedIn
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 1, backgroundColor: colors.error[500] }}
                disableElevation
              >
                Instagram
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 1, backgroundColor: colors.oxfordBlue[500] }}
                disableElevation
              >
                X (twitter)
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid container size={7}>
          <Grid size={4}>
            <MiniCard
              color={"primary"}
              label={"test"}
              count={"test"}
              icon={0}
            ></MiniCard>
          </Grid>
          <Grid size={4}>
            <MiniCard
              color={"error"}
              label={"test"}
              count={"test"}
              icon={0}
            ></MiniCard>
          </Grid>
          <Grid size={4}>
            <MiniCard
              color={"success"}
              label={"test"}
              count={"test"}
              icon={<MapIcon />}
            ></MiniCard>
          </Grid>
          <CustomTimeline></CustomTimeline>
        </Grid>
      </Grid>
      <Footer></Footer>
    </Box>
  );
};

export default UserProfile;
