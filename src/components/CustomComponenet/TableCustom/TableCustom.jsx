import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const TableCustom = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 200,
    editable: false,
  });
  return (
    <Box
      sx={(theme) => ({
        height: "80vh",
        width: "100%",
        "& .MuiDataGrid-root": { border: "none" },
        "& .MuiDataGrid-cell": { borderBottom: "none" },
        "& .MuiDataGrid-toolbarContainer": { mb: 1 },
        "& .MuiDataGrid-columnHeader": { color: theme.palette.primary.light },
        "& .MuiDataGrid-scrollbar--vertical": { width: "5px" },
        "& .MuiDataGrid-scrollbar--horizontal": { height: "5px" },
      })}
    >
      <DataGrid
        {...data}
        loading={data.rows.length === 0}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default TableCustom;
