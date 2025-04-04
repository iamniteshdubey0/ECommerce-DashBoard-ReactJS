import React from "react";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useUser } from "../components/Context/UserContext";

const useProfileMenuItems = () => {
  const { logoutUser } = useUser();

  const PROFILEMENUITEM_LIST = [
    {
      id: "myAccount",
      label: "My Account",
      icon: <PersonAdd />,
      path: "/user-profile"
    },
    {
      id: "resetPassword",
      label: "Reset Password",
      icon: <Settings />,
      // Add a click handler if needed
    },
    {
      id: "logout",
      label: "Logout",
      icon: <Logout />,
      click: logoutUser,
    },
  ];

  return PROFILEMENUITEM_LIST;
};

export default useProfileMenuItems;
