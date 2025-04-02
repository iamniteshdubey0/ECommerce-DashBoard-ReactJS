import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ListItemButton from "@mui/material/ListItemButton";
import Chip from "@mui/material/Chip";

const CtLisItemLi = ({ username, last_message, unseen_count, selected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ListItem
      alignItems="flex-start"
      disablePadding
      sx={{
        my: 0.5,
        borderRadius: "8px",
      }}
    >
      <ListItemButton
        selected={selected || false}
        sx={{
          borderRadius: "6px",
        }}
      >
        <ListItemAvatar>
          <Badge
            overlap="circular"
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent=""
            color="success"
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Badge>
        </ListItemAvatar>
        <ListItemText>
          <Typography
            variant="h6"
            sx={{
              textTransform: "capitalize",
              fontWeight: "bold",
              letterSpacing: "-0.05em",
              fontSize: "14px",
              color:colors.teal[700]
            }}
          >
            {username}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: colors.success[700],
              fontSize: "12px",
            }}
          >
            {last_message}
          </Typography>
        </ListItemText>
        <Chip label={unseen_count} color="primary" size="small" />
        <IconButton edge="end" aria-label="delete">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

export default CtLisItemLi;
