import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/main/Dashboard/Dashboard";
import Charts from "./pages/ui/Charts/Charts";
import Header from "./components/Header/Header";
import Grid from "@mui/material/Grid2";
import SideBar from "./components/SideBar/SideBar";
import { useSidebar } from "./components/Context/SidebarContext";
import { useUser } from "./components/Context/UserContext";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import PasswordReset from "./pages/auth/PasswordReset";
import Analytics from "./pages/main/Dashboard/Analytics";
import Crm from "./pages/main/Dashboard/Crm";
import UserList from "./pages/main/Users/userList";
import UserProfile from "./pages/main/Users/UserProfile";
import ProductList from "./pages/main/Product/ProductList";
import ProductAdd from "./pages/main/Product/ProductAdd";

function App() {
  const { isSidebarOpen } = useSidebar();
  const { isUserLogged } = useUser();
  return (
    <BrowserRouter>
      {isUserLogged && <Header></Header>}

      <Grid container spacing={2} columnGap={0} sx={{ overflow: "hidden" }}>
        {isUserLogged && (
          <Grid
            size={isSidebarOpen ? 2.5 : 1}
            sx={{ transition: "all 0.3s ease-in-out" }}
          >
            <SideBar></SideBar>
          </Grid>
        )}
        <Grid
          size={isUserLogged ? (isSidebarOpen ? 9.5 : 11) : 12}
          sx={{ borderRadius: 2, transition: "all 0.3s ease-in-out" }}
        >
          <Routes>
            {isUserLogged ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/crm" element={<Crm />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/user-list" element={<UserList />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/product-add" element={<ProductAdd />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/passwordRest" element={<PasswordReset />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            )}
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
