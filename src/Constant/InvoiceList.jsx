import React from "react";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import BlockIcon from '@mui/icons-material/Block';

const INVOICE_LIST = [
  {
    id: "recievedamount",
    label: "Recieved Amount",
    icon: <DoneAllIcon />,
    count: 15340,
    color: "success",
  },
  {
    id: "draftsamount",
    label: "Drafts Amount",
    icon: <PendingActionsIcon />,
    count: 75850,
    color: "warning",
  },
  {
    id: "pendingAmount",
    label: "Pending Amount",
    icon: <BlockIcon />,
    count: 4758,
    color: "error",
  },
];

export default INVOICE_LIST;
