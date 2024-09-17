import React, { useState } from "react";
import {
  Box,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Tooltip,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SIDEBAR_LIST from "../../Constant/SideBarLi";
import { useSidebar } from "../Context/SidebarContext";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { isSidebarOpen } = useSidebar();
  const [open, setOpen] = useState({});
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [linkActive, setLinkActive] = useState("");

  const handleClick = (id) => {
    setOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setLinkActive(id);
  };

  return (
    <Box
      component="div"
      sx={{
        borderRadius: 2,
        mt: 0.5,
        maxHeight: "87vh",
        overflowY: "auto",
        p: "0px 5px ",
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[200]
            : colors.oxfordBlue[300],
        display: "flex",
        flexDirection: "column",
        alignItems: isSidebarOpen ? "flex-start" : "center",
        transition: "width 0.3s ease-in-out",
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
      }}
    >
      {SIDEBAR_LIST.map((item) => (
        <List
          key={item.id}
          sx={{ width: "100%" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            isSidebarOpen && (
              <ListSubheader
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? colors.whiteSmoke[200]
                      : colors.oxfordBlue[300],
                  color:
                    theme.palette.mode === "light"
                      ? colors.oxfordBlue[200]
                      : colors.whiteSmoke[400],
                  textTransform: "capitalize",
                }}
                component="div"
                id="nested-list-subheader"
              >
                {item.label}
              </ListSubheader>
            )
          }
        >
          <Box
            sx={{
              p: isSidebarOpen ? 1 : 0,
              mt: isSidebarOpen ? 0 : 5,

              textAlign: !isSidebarOpen ? "center" : null,
              transition: "width 0.3s ease-in-out",
            }}
          >
            {item.li.map((itemLi) => (
              <React.Fragment key={itemLi.id}>
                <Link
                  to={itemLi.path}
                  style={{
                    textDecoration: "none",
                    color:
                      theme.palette.mode === "light"
                        ? colors.oxfordBlue[300]
                        : colors.whiteSmoke[400],
                  }}
                >
                  <ListItemButton
                    selected={linkActive === itemLi.id}
                    onClick={() => handleClick(itemLi.id)}
                    sx={{
                      borderRadius: 2,
                      my: isSidebarOpen ? 0.25 : 0.5,
                      transition: "width 0.3s ease-in-out",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        "& .MuiListItemIcon-root": {
                          color: theme.palette.primary.main,
                        },
                      },
                    }}
                  >
                    <Tooltip title={itemLi.label} placement="right">
                      <ListItemIcon
                        sx={{
                          minWidth: "auto",
                          mr: isSidebarOpen ? 1 : 0,
                          transition: "width 0.3s ease-in-out",
                        }}
                      >
                        {itemLi.icon}
                      </ListItemIcon>
                    </Tooltip>
                    {isSidebarOpen && <ListItemText primary={itemLi.label} />}
                    {itemLi.subItems.length > 0 &&
                      (open[itemLi.id] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </Link>
                {itemLi.subItems.length > 0 && (
                  <Collapse
                    in={open[itemLi.id]}
                    timeout="auto"
                    unmountOnExit
                    sx={{
                      backgroundColor:
                        theme.palette.mode === "light"
                          ? colors.whiteSmoke[500]
                          : colors.oxfordBlue[500],
                      borderRadius: 2,
                      width: isSidebarOpen ? "100%" : "95%",
                      transition: "width 0.3s ease-in-out",
                      justifySelf: "center",
                    }}
                  >
                    <List component="div" disablePadding>
                      {itemLi.subItems.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.path}
                          style={{
                            textDecoration: "none",
                            color:
                              theme.palette.mode === "light"
                                ? colors.oxfordBlue[300]
                                : colors.whiteSmoke[400],
                          }}
                        >
                          <ListItemButton
                            selected={linkActive === subItem.id}
                            key={subItem.id}
                            sx={{
                              borderRadius: 2,
                              my: 0.25,
                              p: 0.5,
                              "&:hover": {
                                color: theme.palette.primary.main,
                                "& .MuiListItemIcon-root": {
                                  color: theme.palette.primary.main,
                                },
                              },
                            }}
                          >
                            <Tooltip title={subItem.label} placement="right">
                              <ListItemIcon
                                sx={{
                                  minWidth: "auto",
                                  mr: isSidebarOpen ? 1 : 0,
                                  pl: isSidebarOpen ? 4 : 2,
                                  transition: "width 0.3s ease-in-out",
                                }}
                              >
                                {subItem.icon}
                              </ListItemIcon>
                            </Tooltip>
                            {isSidebarOpen && (
                              <ListItemText primary={subItem.label} />
                            )}
                          </ListItemButton>
                        </Link>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </Box>
        </List>
      ))}
    </Box>
  );
};

export default SideBar;
