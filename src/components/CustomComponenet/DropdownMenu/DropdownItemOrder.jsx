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
import AvatarGroup from "@mui/material/AvatarGroup";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const DropdownItemOrder = () => {
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
          Orders
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
              p: 0.25,
            }}
          >
            <ListItemAvatar>
              <AvatarGroup max={3} sx={{ mr: 1 }}>
                <SmallAvatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <SmallAvatar
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
                <SmallAvatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </AvatarGroup>
            </ListItemAvatar>
            <ListItemText
              sx={{
                color:
                  theme.palette.mode === "light"
                    ? colors.oxfordBlue[800]
                    : colors.whiteSmoke[500],
                m: 0.5,
              }}
              primary="Nitesh Dubey"
              secondary={
                <Typography component="span" variant="body2">
                  order value ~ 3000
                </Typography>
              }
            />
            <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </ListItemButton>
        </ListItem>

        <ListItem divider={true} alignItems="flex-start" disablePadding>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              p: 0.25,
            }}
          >
            <ListItemAvatar>
              <AvatarGroup max={3} sx={{ mr: 1 }}>
                <SmallAvatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <SmallAvatar
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
                <SmallAvatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </AvatarGroup>
            </ListItemAvatar>
            <ListItemText
              sx={{
                m: 0.5,
              }}
              primary="Nitesh Dubey"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  order value ~ 3000
                </Typography>
              }
            />
            <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </ListItemButton>
        </ListItem>

        <ListItem divider={true} alignItems="flex-start" disablePadding>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              p: 0.25,
            }}
          >
            <ListItemAvatar>
              <AvatarGroup max={3} sx={{ mr: 1 }}>
                <SmallAvatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <SmallAvatar
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
                <SmallAvatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </AvatarGroup>
            </ListItemAvatar>
            <ListItemText
              sx={{
                m: 0.5,
              }}
              primary="Nitesh Dubey"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  order value ~ 3000
                </Typography>
              }
            />
            <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </ListItemButton>
        </ListItem>

        <ListItem divider={true} alignItems="flex-start" disablePadding>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              p: 0.25,
            }}
          >
            <ListItemAvatar>
              <AvatarGroup max={3} sx={{ mr: 1 }}>
                <SmallAvatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <SmallAvatar
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
                <SmallAvatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </AvatarGroup>
            </ListItemAvatar>
            <ListItemText
              sx={{
                m: 0.5,
              }}
              primary="Nitesh Dubey"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  order value ~ 3000
                </Typography>
              }
            />
            <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </ListItemButton>
        </ListItem>

        <ListItem divider={true} alignItems="flex-start" disablePadding>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              p: 0.25,
            }}
          >
            <ListItemAvatar>
              <AvatarGroup max={3} sx={{ mr: 1 }}>
                <SmallAvatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <SmallAvatar
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
                <SmallAvatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </AvatarGroup>
            </ListItemAvatar>
            <ListItemText
              sx={{
                m: 0.5,
              }}
              primary="Nitesh Dubey"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  order value ~ 3000
                </Typography>
              }
            />
            <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </ListItemButton>
        </ListItem>

        <ListItem divider={true} alignItems="flex-start" disablePadding>
          <ListItemButton
            sx={{
              borderRadius: "8px",
              p: 0.25,
            }}
          >
            <ListItemAvatar>
              <AvatarGroup max={3} sx={{ mr: 1 }}>
                <SmallAvatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <SmallAvatar
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
                <SmallAvatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </AvatarGroup>
            </ListItemAvatar>
            <ListItemText
              sx={{
                m: 0.5,
              }}
              primary="Nitesh Dubey"
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  order value ~ 3000
                </Typography>
              }
            />
            <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DropdownItemOrder;
