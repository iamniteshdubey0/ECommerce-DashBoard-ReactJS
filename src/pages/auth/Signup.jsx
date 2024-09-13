import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { useUser } from "../../components/Context/UserContext";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import logo from "../../assets/images/Wow-shop-logo-bg.png";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SecurityIcon from "@mui/icons-material/Security";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import { Link } from "react-router-dom";

const Signup = () => {
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
          py: 4,
        }}
      >
        <Paper
          sx={{
            width: "350px",
            minHeight: "510px",
            maxHeight: "520px",
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
            Register a new account
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
              id="userName"
              label="Full Name"
              defaultValue=""
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              required
              size="small"
              id="email"
              label="Email/Username"
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
            <TextField
              required
              size="small"
              id="password"
              label="Password"
              defaultValue=""
              type={showPassword ? "text" : "password"}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              required
              size="small"
              id="confirmPassword"
              label="Confirm Password"
              defaultValue=""
              type={showPassword ? "text" : "password"}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SecurityIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
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
              Sign Up
            </Button>
          </Box>

          <Chip label="OR" size="small" sx={{ mt: 1 }} />

          <Grid container spacing={2} sx={{ width: "80%", mt: 1 }}>
            <Grid size={6} sx={{ textAlign: "end" }}>
              <Button
                sx={{ mt: 1 }}
                variant="contained"
                onClick={loginUser}
                color={"secondary"}
                disableElevation
              >
                Google
              </Button>
            </Grid>
            <Grid size={6}>
              <Button
                sx={{ mt: 1 }}
                variant="contained"
                onClick={loginUser}
                color={"info"}
                disableElevation
              >
                Facebook
              </Button>
            </Grid>
          </Grid>
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
            Already have an account?
            <Link
              to={"/login"}
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

export default Signup;
