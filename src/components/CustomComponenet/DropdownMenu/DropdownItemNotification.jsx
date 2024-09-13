import React from "react";
import Settings from "@mui/icons-material/Settings";
import { Box, Divider, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const DropdownItemNotification = ({ handleCloseDropdown }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box component="div">
      <Box
        component="div"
        className="dropdown-header"
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color:
              theme.palette.mode === "light"
                ? colors.oxfordBlue[800]
                : colors.whiteSmoke[500],
          }}
        >
          Notifications
        </Typography>
        <Box component="div">
          <Button
            color="secondary"
            sx={{ textTransform: "capitalize" }}
            size="small"
            startIcon={<ArrowRightAltIcon fontSize="small" />}
          >
            View All
          </Button>
          <IconButton aria-label="setting">
            <Settings fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Divider></Divider>
      <List
        dense={true}
        disablePadding={true}
        sx={(theme) => ({
          width: "100%",
          overflowY: "scroll",
          height: "300px",
          mt: 0.25,
          px: 0.25,
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
        <ListItem divider={true} alignItems="flex-start" disablePadding>
          <ListItemButton
            sx={{
              borderRadius: "8px",
            }}
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              sx={{
                color:
                  theme.palette.mode === "light"
                    ? colors.oxfordBlue[800]
                    : colors.whiteSmoke[500],
              }}
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2">
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
            <IconButton edge="end" aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DropdownItemNotification;
