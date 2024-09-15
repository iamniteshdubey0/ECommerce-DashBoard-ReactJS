import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MessageIcon from "@mui/icons-material/Message";

const PopularClientTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const popularUsers = [
    { id: 2, name: "Nitesh Dubey", order: 300, amount: 4705 },
    { id: 5, name: "Dipesh Dalvi", order: 200, amount: 4105 },
    { id: 8, name: "Deepak Singh", order: 470, amount: 5789 },
    { id: 94, name: "Aman Pandey", order: 120, amount: 6871 },
    { id: 75, name: "Rupesh Gupta", order: 147, amount: 5477 },
    { id: 412, name: "Satyam Singh", order: 85, amount: 44475 },
    { id: 987, name: "Ashish Yadav", order: 44, amount: 1447 },
  ];

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
        <Typography variant="h4">Top 10 Popular Clients</Typography>
        <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
      <TableContainer sx={{ p: 1, height: "410px", overflowY: "auto" }}>
        <Table
          sx={{
            "& .MuiTableCell-root": {
              borderTop: "1px solid rgba(224, 224, 224, 1);",
              borderRight: "1px solid rgba(224, 224, 224, 1);",
              fontSize: "14px",
              color:
                theme.palette.mode === "light"
                  ? colors.oxfordBlue[400]
                  : colors.whiteSmoke[600],
              textTransform: "capitalize",
              "&:last-child": {
                borderRight: 0,
              },
            },
          }}
          aria-label="Popular Clients"
        >
          <TableHead>
            <TableRow>
              <TableCell>Clients</TableCell>
              <TableCell>Orders</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {popularUsers.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": {} }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.order}</TableCell>
                <TableCell>{user.amount}</TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    aria-label="viewProfile"
                    size="small"
                    color="neonBlue"
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    aria-label="viewProfile"
                    size="small"
                    color="success"
                  >
                    <MessageIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PopularClientTable;
