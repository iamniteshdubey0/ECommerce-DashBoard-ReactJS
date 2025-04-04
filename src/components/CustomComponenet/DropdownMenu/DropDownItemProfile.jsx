import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import useProfileMenuItems from "../../../Constant/ProfileMenuItemList";
import { Link } from "react-router-dom";

const DropDownItemProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const menuItems = useProfileMenuItems();
  return (
    <React.Fragment>
      {menuItems.map((item) => (
        <Link to={item.path} style={{
          textDecoration:'none'
        }}>
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
        </Link>
      ))}
    </React.Fragment>
  );
};

export default DropDownItemProfile;
