import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import logo from "../../assets/images/Wow-shop-logo-bg.png";
import { Button, Typography, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchBox from "../CustomComponenet/SearchBox/SearchBox";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EmailIcon from "@mui/icons-material/Email";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DropDownMenu from "../CustomComponenet/DropdownMenu/DropDownMenu";
import DropDownItemProfile from "../CustomComponenet/DropdownMenu/DropDownItemProfile";
import DropdownItemNotification from "../CustomComponenet/DropdownMenu/DropdownItemNotification";
import DropdownItemMessage from "../CustomComponenet/DropdownMenu/DropdownItemMessage";
import DropdownItemOrder from "../CustomComponenet/DropdownMenu/DropdownItemOrder";
import IconBtn from "../CustomComponenet/IconBtn/IconBtn";
import BadgeCustom from "../CustomComponenet/BadgeCustom/BadgeCustom";
import { useSidebar } from "../Context/SidebarContext";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useUser } from "../Context/UserContext";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = useState({});
  const { toggleSidebar } = useSidebar();
  const { isSidebarOpen } = useSidebar();
  const { isUserLogged } = useUser();

  const handleClick = (event, dropdownType) => {
    setAnchorEl((prev) => ({ ...prev, [dropdownType]: event.currentTarget }));
  };

  const handleClose = (dropdownType) => {
    setAnchorEl((prev) => ({ ...prev, [dropdownType]: null }));
  };

  const openNotification = Boolean(anchorEl.notification);
  const openProfile = Boolean(anchorEl.profile);
  const openMessage = Boolean(anchorEl.message);
  const openCart = Boolean(anchorEl.cart);
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[200]
            : colors.oxfordBlue[300],
      }}
    >
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid
          size={{ xs: 2 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Link to={"/"} className="logoWraper">
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={logo}
                sx={{ width: "50px", height: "50px" }}
              ></Box>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.primary.main,
                  display: { xs: "none", md: "block" },
                }}
              >
                Wow-shop
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid
          size={{ xs: 6, md:4 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {xs:'flex-end', md:'flex-start'},
          }}
        >
          <IconBtn onClick={toggleSidebar}>
            <Tooltip title="Collapse">
              {isSidebarOpen ? (
                <MenuOpenIcon fontSize="small"></MenuOpenIcon>
              ) : (
                <MenuIcon fontSize="small"></MenuIcon>
              )}
            </Tooltip>
          </IconBtn>
          <SearchBox></SearchBox>
        </Grid>
        <Grid
          size={{ xs: 4, md:6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <IconBtn onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "light" ? (
              <Tooltip title="Dark Mode">
                <DarkModeIcon fontSize="small"></DarkModeIcon>
              </Tooltip>
            ) : (
              <Tooltip title="Light Mode">
                <LightModeIcon fontSize="small"></LightModeIcon>
              </Tooltip>
            )}
          </IconBtn>
          {/* <IconBtn>
              <LanguageIcon fontSize="small"></LanguageIcon>
            </IconBtn> */}
          <IconBtn
            aria-controls={openCart ? "customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openCart ? "true" : undefined}
            onClick={(event) => handleClick(event, "cart")}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <BadgeCustom badgeContent={6} color="secondary">
              <Tooltip title="Orders">
                <ShoppingCartIcon fontSize="small"></ShoppingCartIcon>
              </Tooltip>
            </BadgeCustom>
          </IconBtn>
          <DropDownMenu
            anchorEl={anchorEl.cart}
            open={openCart}
            handleCloseDropdown={() => handleClose("cart")}
          >
            <DropdownItemOrder
              handleCloseDropdown={() => handleClose("cart")}
            ></DropdownItemOrder>
          </DropDownMenu>
          <IconBtn
            aria-controls={openMessage ? "customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMessage ? "true" : undefined}
            onClick={(event) => handleClick(event, "message")}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <BadgeCustom badgeContent={12} color="secondary">
              <Tooltip title="Messages">
                <EmailIcon fontSize="small"></EmailIcon>
              </Tooltip>
            </BadgeCustom>
          </IconBtn>
          <DropDownMenu
            anchorEl={anchorEl.message}
            open={openMessage}
            handleCloseDropdown={() => handleClose("message")}
          >
            <DropdownItemMessage
              handleCloseDropdown={() => handleClose("message")}
            ></DropdownItemMessage>
          </DropDownMenu>
          <IconBtn
            aria-controls={openNotification ? "customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openNotification ? "true" : undefined}
            onClick={(event) => handleClick(event, "notification")}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <BadgeCustom badgeContent={10} color="secondary">
              <Tooltip title="Notifications">
                <NotificationsIcon fontSize="small"></NotificationsIcon>
              </Tooltip>
            </BadgeCustom>
          </IconBtn>
          <DropDownMenu
            anchorEl={anchorEl.notification}
            open={openNotification}
            handleCloseDropdown={() => handleClose("notification")}
          >
            <DropdownItemNotification
              handleCloseDropdown={() => handleClose("notification")}
            ></DropdownItemNotification>
          </DropDownMenu>
          <Button
            aria-controls={openProfile ? "customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openProfile ? "true" : undefined}
            onClick={(event) => handleClick(event, "profile")}
            sx={{
              py: 0.25,
              px: 1,
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? colors.whiteSmoke[500]
                    : colors.oxfordBlue[500],
              },
            }}
          >
            <Tooltip title="Account settings">
              <Avatar
                sx={{ mr: 1, width: "35px", height: "35px" }}
                alt="Nitesh Dubey"
                src="/static/images/avatar/1.jpg"
              />
            </Tooltip>
            <Box
              component="div"
              sx={{
                textAlign: "left",
                display: { xs: "none", md: "block" },
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
          </Button>
          <DropDownMenu
            anchorEl={anchorEl.profile}
            open={openProfile}
            handleCloseDropdown={() => handleClose("profile")}
          >
            <DropDownItemProfile
              handleCloseDropdown={() => handleClose("profile")}
            ></DropDownItemProfile>
          </DropDownMenu>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
