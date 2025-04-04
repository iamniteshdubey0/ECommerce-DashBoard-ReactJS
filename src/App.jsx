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
import UserList from "./pages/main/Users/UserList";
import UserProfile from "./pages/main/Users/UserProfile";
import ProductList from "./pages/main/Product/ProductList";
import ProductAdd from "./pages/main/Product/ProductAdd";
import ProductView from "./pages/main/Product/ProductView";
import InvoiceList from "./pages/main/Invoice/InvoiceList";
import InvoiceDetails from "./pages/main/Invoice/InvoiceDetails";
import Message from "./pages/main/Message/Message";
import ButtonUi from "./pages/ui/Buttons/ButtonUi";

function App() {
  const { isSidebarOpen } = useSidebar();
  const { isUserLogged } = useUser();
  return (
    <BrowserRouter>
      {isUserLogged && <Header></Header>}

      <Grid container spacing={2} columnGap={0} sx={{ overflow: "hidden" }}>
        {isUserLogged && (
          <Grid
            size={{xs:isSidebarOpen ? 8 : 0, md:isSidebarOpen ? 2.5 : 1}}
            sx={{ transition: "all 0.3s ease-in-out", position:{xs:'absolute', md:'inherit'}, zIndex:999, height:{xs:'100vh'} }}
          >
            <SideBar></SideBar>
          </Grid>
        )}
        <Grid
          size={{xs:isUserLogged ? (isSidebarOpen ? 12 : 12) : 12, md:isUserLogged ? (isSidebarOpen ? 9.5 : 11) : 12}}
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
                <Route path="/product-view" element={<ProductView />} />
                <Route path="/invoice-list" element={<InvoiceList />} />
                <Route path="/invoice-details" element={<InvoiceDetails />} />
                <Route path="/messages" element={<Message />} />
                <Route path="/button-ui" element={<ButtonUi />} />
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
