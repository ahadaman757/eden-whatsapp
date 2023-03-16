import React, { createContext } from "react";
import Home from "./pages/home/home";
import WhatsAppApi from "./pages/whatsapp-api/whatsapp";
import Pricing from "./pages/pricing/pricing";
import Contactus from "./pages/Contact us/contactus";
import Faq from "./pages/FAQ/faq";
import Login from "./pages/authtenticate/Login";
import Signup from "./pages/authtenticate/Signup";
import Forgetpass from "./pages/authtenticate/forgetpass";
import Newpass from "./pages/authtenticate/Newpass";
import Confirompass from "./pages/authtenticate/confirompass";
import Dashboard from "./pages/dashboard/dashboard";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Profile from "./pages/dashboardpages/profile/profile";
import Dashboardmain from "./pages/dashboardpages/dashboardmain/dashbordmain";
import Templete from "./pages/dashboardpages/templete/templete";
import Recentactivity from "./pages/dashboardpages/Recent Activity/recentactivity";
import Setting from "./pages/dashboardpages/setting/setting";
import Contacts from "./pages/dashboardpages/contacts/contacts";
import Marketing from "./pages/dashboardpages/Marketing/marketing";
import Admindashbord from "./pages/admindashbord/admindashbord";
import AdminDashboardmain from "./pages/adminpages/dashboardmain/admindashbordmain";
import Userpage from "./pages/adminpages/Users/userpage";
const TRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />{" "}
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/signup" element={<Signup />} />{" "}
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/newpass/:code" element={<Newpass />} />
        <Route path="/confirompass" element={<Confirompass />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/whatsappapi" element={<WhatsAppApi />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Dashboardmain />} />
          <Route path="templete" element={<Templete />} />
          <Route path="recentactivity" element={<Recentactivity />} />
          <Route path="setting" element={<Setting />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="marketing" element={<Marketing />} />
        </Route>
        <Route path="/admindashbord" element={<Admindashbord />}>
          <Route path="" element={<AdminDashboardmain />} />
          <Route path="user" element={<Userpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default TRoutes;
