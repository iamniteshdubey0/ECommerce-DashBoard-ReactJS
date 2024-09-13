import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import useProfileMenuItems from "../../../Constant/ProfileMenuItemList";

const DropDownItemProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const menuItems = useProfileMenuItems();
  return (
    <React.Fragment>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          onClick={item.click}
          sx={{
            color:
              theme.palette.mode === "light"
                ? colors.oxfordBlue[800]
                : colors.whiteSmoke[500],
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          {item.label}
        </MenuItem>
      ))}
    </React.Fragment>
  );
};

export default DropDownItemProfile;
