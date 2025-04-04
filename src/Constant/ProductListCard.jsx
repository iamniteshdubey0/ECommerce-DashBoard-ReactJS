import React from "react";
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WidgetsIcon from '@mui/icons-material/Widgets';

const PRODUCTS_LIST = [
  {
    id: "totalProduct",
    label: "Total Product",
    icon: <ShoppingBagIcon />,
    count: 300,
    color: "success",
  },
  {
    id: "totalCategory",
    label: "Total Categories",
    icon: <CategoryIcon />,
    count: 100,
    color: "warning",
  },
  {
    id: "totalBrand",
    label: "Total Brand",
    icon: <WidgetsIcon />,
    count: 40,
    color: "error",
  },
];

export default PRODUCTS_LIST;
