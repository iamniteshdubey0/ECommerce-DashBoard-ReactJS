import React, { children } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: -7,
    border: `2px solid white`,
    padding: "0 4px",
  },
}));

const BadgeCustom = ({ children, ...props }) => {
  return <StyledBadge {...props}>{children}</StyledBadge>;
};

export default BadgeCustom;
