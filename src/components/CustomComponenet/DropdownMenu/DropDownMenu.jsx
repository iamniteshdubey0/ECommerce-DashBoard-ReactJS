import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import { tokens } from "../../../theme";

const StyledMenu = styled((props) => (
  <Menu
    elevation={2}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => {
  const colors = tokens(theme.palette.mode);
  return {
    "& .MuiPaper-root": {
      overflow: "hidden",
      borderRadius: 7,
      marginTop: theme.spacing(3),
      minWidth: 180,
      maxWidth: 330,
      maxHeight: 360,
      color: "rgb(55, 65, 81)",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      backgroundColor:
        theme.palette.mode === "light"
          ? colors.whiteSmoke[100]
          : colors.oxfordBlue[300],
      "& .MuiMenu-list": {
        padding: "5px !important",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
        "&:hover": {
          borderRadius: 8,
        },
      },
      // ...theme.applyStyles("dark", {
      //   color: theme.palette.oxfordBlue[600],
      // }),
    },
  };
});

const DropDownMenu = ({ anchorEl, open, handleCloseDropdown, children }) => {
  return (
    <StyledMenu
      id="customized-menu"
      MenuListProps={{
        "aria-labelledby": "customized-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseDropdown}
    >
      {children}
    </StyledMenu>
  );
};

export default DropDownMenu;
