import React, { useState } from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box, Button, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Footer from "../../../components/Footer/Footer";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FormLabel from "@mui/material/FormLabel";

const UserProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [anchorEl, setAnchorEl] = useState({});

  const handleClick = (event, modalType) => {
    setAnchorEl((prev) => ({ ...prev, [modalType]: event.currentTarget }));
  };

  const handleClose = (modalType) => {
    setAnchorEl((prev) => ({ ...prev, [modalType]: null }));
  };

  const openSetting = Boolean(anchorEl.setting);
  const openProfile = Boolean(anchorEl.profile);

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
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
        title="My Profile"
        text="Home"
        textlink="/"
      ></BreadcrumCustom>
      <Grid container spacing={2} sx={{ mt: {xs:2, md:4} }}>
        <Grid size={{ xs: 12, md: 5 }}>
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
                <IconButton
                  aria-label="setting"
                  onClick={(event) => handleClick(event, "setting")}
                >
                  <SettingsIcon fontSize="small"></SettingsIcon>
                </IconButton>

                <Dialog
                  open={openSetting}
                  anchorEl={anchorEl.setting}
                  onClose={() => handleClose("setting")}
                  aria-labelledby="modal-setting"
                  aria-describedby="smodal-setting"
                >
                  <DialogTitle id="scroll-dialog-title">Settings</DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="modal-setting"
                      ref={descriptionElementRef}
                      tabIndex={-1}
                    >
                      <Box component="div" sx={{ p: 1, mb: 5 }}>
                        <Divider textAlign="left" sx={{ mb: 3 }}>
                          <Chip
                            color="primary"
                            label="Change PassWord"
                            size="small"
                          />
                        </Divider>
                        <Grid
                          container
                          spacing={2}
                          noValidate
                          autoComplete="off"
                          component={"form"}
                        >
                          <Grid size={12}>
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
                      </Box>

                      <Box component="div" sx={{ p: 1, my: 3 }}>
                        <Divider textAlign="left" sx={{ mb: 3 }}>
                          <Chip
                            color="secondary"
                            label="Other Settings"
                            size="small"
                          />
                        </Divider>
                        <Grid
                          container
                          spacing={2}
                          noValidate
                          autoComplete="off"
                          component={"form"}
                        >
                          <Grid
                            size={6}
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <FormGroup>
                              <FormLabel
                                component="legend"
                                sx={{ mb: 2, fontWeight: "bold" }}
                              >
                                Product Email Settings
                              </FormLabel>
                              <FormControlLabel
                                control={<Switch />}
                                label="Send Copy To Personal Email"
                              />
                              <FormControlLabel
                                control={<Switch />}
                                label="New membership approval"
                              />
                              <FormControlLabel
                                control={<Switch />}
                                label="Someone adds you as a connection"
                              />
                              <FormControlLabel
                                control={<Switch />}
                                label="Required"
                              />

                              <FormControlLabel
                                control={<Switch defaultChecked />}
                                label="Label"
                              />
                            </FormGroup>
                          </Grid>

                          <Grid
                            size={6}
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <FormGroup>
                              <FormLabel
                                component="legend"
                                sx={{ mb: 2, fontWeight: "bold" }}
                              >
                                Activity Email Settings
                              </FormLabel>
                              <FormControlLabel
                                control={<Switch />}
                                label="Send Copy To Personal Email"
                              />
                              <FormControlLabel
                                control={<Switch />}
                                label="New membership approval"
                              />
                              <FormControlLabel
                                control={<Switch />}
                                label="Someone adds you as a connection"
                              />
                              <FormControlLabel
                                control={<Switch />}
                                label="Required"
                              />

                              <FormControlLabel
                                control={<Switch defaultChecked />}
                                label="Label"
                              />
                            </FormGroup>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box component="div" sx={{ p: 1, my: 3 }}>
                        <Divider textAlign="left" sx={{ mb: 3 }}>
                          <Chip
                            color="secondary"
                            label="Additional Settings"
                            size="small"
                          />
                        </Divider>
                      </Box>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleClose("setting")}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleClose("setting")}
                    >
                      Update
                    </Button>
                  </DialogActions>
                </Dialog>

                <IconButton
                  aria-label="edit"
                  onClick={(event) => handleClick(event, "profile")}
                >
                  <EditIcon fontSize="small"></EditIcon>
                </IconButton>
                <Dialog
                  open={openProfile}
                  anchorEl={anchorEl.profile}
                  onClose={() => handleClose("profile")}
                  aria-labelledby="modal-profile"
                  aria-describedby="modal-profile-desc"
                >
                  <DialogTitle id="scroll-dialog-title">
                    Edit Profile
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText
                      id="modal-profile-desc"
                      ref={descriptionElementRef}
                      tabIndex={-1}
                    >
                      <Box component="div" sx={{ p: 1, mb: 5 }}>
                        <Divider textAlign="left" sx={{ mb: 3 }}>
                          <Chip
                            color="primary"
                            label="Personal Details"
                            size="small"
                          />
                        </Divider>

                        <Grid
                          container
                          spacing={2}
                          noValidate
                          autoComplete="off"
                          component={"form"}
                        >
                          <Grid size={{ xs: 12, md: 3 }}>
                            <Box
                              component={"div"}
                              sx={{
                                p: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems:{xs:'center', md:'flex-start'},
                                flexDirection: "column",
                              }}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 100, height: 100, mb: 3 }}
                              />

                              <Button
                                variant="contained"
                                component="label"
                                role={undefined}
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                              >
                                Upload
                                <VisuallyHiddenInput
                                  type="file"
                                  onChange={(event) =>
                                    console.log(event.target.files)
                                  }
                                  multiple
                                />
                              </Button>
                            </Box>
                          </Grid>
                          <Grid container size={{ xs: 12, md: 9 }}>
                            <Grid size={6}>
                              <TextField
                                id="name"
                                label="Full Name"
                                variant="outlined"
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid size={6}>
                              <TextField
                                id="userName"
                                label="UserName"
                                variant="outlined"
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid size={12}>
                              <TextField
                                fullWidth
                                id="userBiography"
                                label="Biography"
                                multiline
                                rows={4}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box component="div" sx={{ p: 1, my: 3 }}>
                        <Divider textAlign="left" sx={{ mb: 3 }}>
                          <Chip
                            color="secondary"
                            label="Contact Details"
                            size="small"
                          />
                        </Divider>

                        <Grid
                          container
                          spacing={2}
                          noValidate
                          autoComplete="off"
                          component={"form"}
                        >
                          <Grid size={6}>
                            <TextField
                              id="phone"
                              label="Phone Number"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                          <Grid size={6}>
                            <TextField
                              id="alt-phone"
                              label="Alternate Phone Number"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                          <Grid size={6}>
                            <TextField
                              id="email"
                              label="Email Address"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                          <Grid size={6}>
                            <TextField
                              id="website"
                              label="Personal Website"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                          <Grid size={12}>
                            <TextField
                              id="address"
                              label="Address"
                              variant="outlined"
                              size="small"
                              fullWidth
                              multiline
                              rows={2}
                            />
                          </Grid>
                        </Grid>
                      </Box>

                      <Box component="div" sx={{ p: 1, my: 3 }}>
                        <Divider textAlign="left" sx={{ mb: 3 }}>
                          <Chip
                            color="secondary"
                            label="SocialMedia"
                            size="small"
                          />
                        </Divider>

                        <Grid
                          container
                          spacing={2}
                          noValidate
                          autoComplete="off"
                          component={"form"}
                        >
                          <Grid size={6}>
                            <TextField
                              id="userLinkedin"
                              label="LinkedIn Url"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                          <Grid size={6}>
                            <TextField
                              id="userInstagram"
                              label="Instagram Url"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                          <Grid size={6}>
                            <TextField
                              id="userX"
                              label="X (Twitter) Url"
                              variant="outlined"
                              size="small"
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleClose("profile")}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleClose("profile")}
                    >
                      Update
                    </Button>
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

        <Grid container size={{ xs: 12, md: 7 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <MiniCard
              color={"primary"}
              label={"test"}
              count={"test"}
              icon={0}
            ></MiniCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MiniCard
              color={"error"}
              label={"test"}
              count={"test"}
              icon={0}
            ></MiniCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
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
