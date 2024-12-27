import React from "react";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PeopleIcon from "@mui/icons-material/People";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AddchartIcon from "@mui/icons-material/Addchart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PreviewIcon from "@mui/icons-material/Preview";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

const SIDEBAR_LIST = [
  {
    id: "mainPage",
    label: "main Page",
    li: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: <SpaceDashboardIcon />,
        subItems: [
          {
            id: "ecommerce",
            label: "Ecommerce",
            icon: <StorefrontIcon />,
            path: "/ecommerce",
          },
          {
            id: "anyltics",
            label: "Anyltics",
            icon: <DataThresholdingIcon />,
            path: "/analytics",
          },
          { id: "crm", label: "Crm", icon: <AddchartIcon />, path: "/crm" },
        ],
      },

      {
        id: "products",
        label: "Products",
        icon: <InventoryIcon />,
        subItems: [
          {
            id: "productList",
            label: "Product List",
            icon: <ShoppingCartIcon />,
            path: "/product-list",
          },
          { id: "productView", label: "Product View", icon: <PreviewIcon /> },
          {
            id: "productAdd",
            label: "Add Product",
            icon: <AddShoppingCartIcon />,
            path: "/product-add",
          },
        ],
      },
      {
        id: "invoice",
        label: "Invoice",
        icon: <ReceiptIcon />,
        subItems: [
          {
            id: "inoviceList",
            label: "Invoice List",
            icon: <ReceiptLongIcon />,
            path: "/invoice-list",
          },
          {
            id: "invoiceDetails",
            label: "Invoice Details",
            icon: <RequestQuoteIcon />,
            path: "/invoice-details",
          },
        ],
      },
      {
        id: "users",
        label: "Users",
        icon: <PeopleIcon />,
        path: "/user-list",
        subItems: [],
      },
      {
        id: "orders",
        label: "Orders",
        icon: <ShoppingBagIcon />,
        subItems: [],
        path: "/orders",
      },
      {
        id: "messages",
        label: "Messages",
        icon: <EmailIcon />,
        subItems: [],
        path: "/messages",
      },
      {
        id: "notifications",
        label: "Notification",
        icon: <NotificationsIcon />,
        subItems: [],
        path: "/notifications",
      },
      {
        id: "setting",
        label: "Setting",
        icon: <SettingsIcon />,
        subItems: [],
        path: "/setting",
      },
    ],
  },
  {
    id: "uiPage",
    label: "ui Page",
    li: [
      {
        id: "blank",
        label: "Blank",
        icon: <SettingsIcon />,
        subItems: [],
        path: "/blank",
      },
      {
        id: "table",
        label: "Table",
        icon: <TableChartIcon />,
        subItems: [],
        path: "/table",
      },
      {
        id: "charts",
        label: "Charts",
        icon: <BarChartIcon />,
        subItems: [],
        path: "/charts",
      },
      {
        id: "buttons",
        label: "Buttons",
        icon: <KeyboardCommandKeyIcon />,
        subItems: [],
        path: "/buttons",
      },
    ],
  },
];

export default SIDEBAR_LIST;
