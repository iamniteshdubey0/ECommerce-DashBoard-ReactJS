import React from "react";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import BlockIcon from '@mui/icons-material/Block';

const USERCARD_LIST = [
  {
    id: "approved",
    label: "Approved",
    icon: <DoneAllIcon />,
    count: 300,
    color: "success",
  },
  {
    id: "pending",
    label: "Pending",
    icon: <PendingActionsIcon />,
    count: 100,
    color: "warning",
  },
  {
    id: "blocked",
    label: "Blocked",
    icon: <BlockIcon />,
    count: 40,
    color: "error",
  },
];

export default USERCARD_LIST;
