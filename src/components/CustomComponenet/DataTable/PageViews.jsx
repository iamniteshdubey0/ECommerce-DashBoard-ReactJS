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

const PageViews = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const pageData = [
    { id: 2, pageName: "Nitesh Dubey", visitor: 300, bounce: 4705 },
    { id: 5, pageName: "Dipesh Dalvi", visitor: 200, bounce: 4105 },
    { id: 8, pageName: "Deepak Singh", visitor: 470, bounce: 5789 },
    { id: 94, pageName: "Aman Pandey", visitor: 120, bounce: 6871 },
    { id: 75, pageName: "Rupesh Gupta", visitor: 147, bounce: 5477 },
    { id: 412, pageName: "Satyam Singh", visitor: 85, bounce: 44475 },
    { id: 987, pageName: "Ashish Yadav", visitor: 44, bounce: 1447 },
  ];

  return (
    <Box
      sx={{
        minHeight: "400px",
        maxHeight: "450px",
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
        <Typography variant="h4">Page Views</Typography>
        <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
      <TableContainer
        sx={{
          height: "370px",
          overflowY: "auto",
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
        <Table
          stickyHeader
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
              <TableCell>Page Name</TableCell>
              <TableCell>Visitors</TableCell>
              <TableCell>Bounce</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageData.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": {} }}
              >
                <TableCell component="th" scope="row">
                  {user.pageName}
                </TableCell>
                <TableCell>{user.visitor}</TableCell>
                <TableCell>{user.bounce}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PageViews;
