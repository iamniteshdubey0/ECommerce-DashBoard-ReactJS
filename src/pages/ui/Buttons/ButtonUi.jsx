import React from "react";
import BreadcrumCustom from "../../../components/CustomComponenet/BreadcrumCustom/BreadcrumCustom";
import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";


const ButtonUi = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      component="section"
      sx={(theme) => ({
        p: 2,
        overflowY: "auto",
        maxHeight: "88vh",
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
      })}
    >
      <BreadcrumCustom
        title="Button UI"
        text="Home"
        textlink="/dashboard"
      ></BreadcrumCustom>

      <Grid
        container
        size={12}
        sx={(theme) => ({
          mt: 5,
          p: 3,
          borderRadius: 2,
          maxHeight: "fit-content",
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? colors.whiteSmoke[100]
              : colors.oxfordBlue[300],
        })}
      >
        <Grid size={6} sx={{ p: 1, my: 1 }}>
          <Divider textAlign="left" sx={{ mb: 2 }}>
            <Chip color="teal" label="Material UI Button" size="small" />
          </Divider>
          <Stack spacing={2} direction="row" sx={{ my: 3 }}>
            <Button variant="text" color="primary">
              Button
            </Button>
            <Button variant="text" color="secondary">
              Button
            </Button>
            <Button variant="text" color="success">
              Button
            </Button>
            <Button variant="text" color="error">
              Button
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" sx={{ my: 3 }}>
            <Button variant="contained" color="primary">
              Button
            </Button>
            <Button variant="contained" color="secondary">
              Button
            </Button>
            <Button variant="contained" color="success">
              Button
            </Button>
            <Button variant="contained" color="error">
              Button
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" sx={{ my: 3 }}>
            <Button variant="outlined" color="primary">
              Button
            </Button>
            <Button variant="outlined" color="secondary">
              Button
            </Button>
            <Button variant="outlined" color="success">
              Button
            </Button>
            <Button variant="outlined" color="error">
              Button
            </Button>
          </Stack>
        </Grid>

        {/* Custom button incomplete */}
        <Grid size={6} sx={{ p: 1, my: 1 }}>
          <Divider textAlign="left" sx={{ mb: 2 }}>
            <Chip color="teal" label="Custom Button" size="small" />
          </Divider>
          <Stack spacing={2} direction="row" sx={{ my: 3 }}>
          
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ButtonUi;
