import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

const data = [
  {
    label: "pending",
    value: 400,
    startIcon: <PendingActionsIcon />,
    color: "#0088FE",
  },
  {
    label: "shipped",
    value: 300,
    startIcon: <LocalShippingIcon />,
    color: "#FFBB28",
  },
  {
    label: "received",
    value: 300,
    startIcon: <CheckCircleOutlineIcon />,

    color: "#00C49F",
  },
  {
    label: "cancelled",
    value: 200,
    startIcon: <CancelIcon />,
    color: "#ef476f",
  },
  {
    label: "refunded",
    value: 100,
    startIcon: <InfoIcon />,
    color: "#FF8042",
  },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

function generateLegends(colors) {
  const [secondary, setSecondary] = useState(false);
  return data.map((item) => (
    <React.Fragment key={item.label}>
      <ListItem
        secondaryAction={<Typography variant="h6">{item.value}</Typography>}
      >
        <ListItemAvatar sx={{ minWidth: "35px", color: item.color }}>
          {item.startIcon}
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
              {item.label}
            </Typography>
          }
          secondary={secondary ? "Secondary text" : null}
        />
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  ));
}

const CPieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        minHeight: "500px",
        maxHeight: "550px",
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[100]
            : colors.oxfordBlue[300],
        borderRadius: 2,
        p: 1,
      }}
    >
      <Box
        component={"div"}
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">orders overview</Typography>
        <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 0,
        }}
      >
        <PieChart
          series={[
            {
              outerRadius: 80,
              innerRadius: 25,
              cornerRadius: 5,
              paddingAngle: 2,
              data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 14,
            },
          }}
          {...sizing}
        />
      </Box>
      <Box component={"ul"}>
        <List>{generateLegends(colors)}</List>
      </Box>
    </Box>
  );
};

export default CPieChart;
