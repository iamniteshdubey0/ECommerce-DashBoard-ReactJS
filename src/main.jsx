import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { SidebarProvider } from "./components/Context/SidebarContext.jsx";
import { UserContexProvider } from "./components/Context/UserContext.jsx";

const Main = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserContexProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </UserContexProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main />);
