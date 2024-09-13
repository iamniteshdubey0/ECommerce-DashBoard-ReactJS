import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";
import { useUser } from "../../components/Context/UserContext";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import logo from "../../assets/images/Wow-shop-logo-bg.png";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const { loginUser } = useUser();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="xl">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Paper
          sx={{
            width: "350px",
            minHeight: "230px",
            maxHeight: "250px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            p: 1,
            borderRadius: 2,
            backgroundColor:
              theme.palette.mode === "light"
                ? colors.whiteSmoke[200]
                : colors.oxfordBlue[200],
          }}
        >
          <Box
            component={"img"}
            sx={{
              height: "60px",
              width: "60px",
              objectFit: "contain",
            }}
            src={logo}
          ></Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Reset the password
          </Typography>

          <Box
            component="form"
            sx={{
              width: "80%",
              textAlign: "center",
              "& .MuiTextField-root": { mt: 3, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              size="small"
              id="email"
              label="Email"
              defaultValue=""
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Button
              size="large"
              sx={{ mt: 2, width: "100%" }}
              variant="outlined"
              onClick={loginUser}
            >
              Get OTP
            </Button>
          </Box>
        </Paper>
        <Paper
          sx={{
            width: "350px",
            minHeight: "50px",
            maxHeight: "50px",
            mt: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            borderRadius: 2,
            backgroundColor:
              theme.palette.mode === "light"
                ? colors.whiteSmoke[200]
                : colors.oxfordBlue[200],
          }}
        >
          <Typography sx={{ textAlign: "end" }} variant="body1">
            Remember the password?
            <Link
              to={"/signup"}
              style={{
                textDecoration: "none",
                color: theme.palette.primary.main,
              }}
            >
              <span style={{ fontWeight: "bold", marginLeft: "4px" }}>
                Login
              </span>
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default PasswordReset;
