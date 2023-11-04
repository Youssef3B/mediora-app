import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import useLocalStorage from "use-local-storage";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import DashboardAdmins from "./Pages/DashboardAdmins";
import DashboardPortfolio from "./Pages/DashboardPortfolio";
import DashboardStats from "./Pages/DashboardStats";
import DashboardReviews from "./Pages/DashboardReviews";
import DashboardPrices from "./Pages/DashboardPrices";
import DashboardTeam from "./Pages/DashboardTeam";
import DashboardServices from "./Pages/DashboardServices";
import DashboardBlog from "./Pages/DashboardBlog";
import DashboardSettings from "./Pages/DashboardSettings";
import DashboardProfile from "./Pages/DashboardProfile";
import DashboardMessages from "./Pages/DashboardMessages";
import DashboardDetails from "./Pages/DashboardDetails";
import Login from "./Pages/Login";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200, // Trigger animations when the element is 200 pixels from the viewport
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/admin" element={<DashboardAdmins />} />
        <Route path="/dashboard/stats" element={<DashboardStats />} />
        <Route path="/dashboard/portfolio" element={<DashboardPortfolio />} />
        <Route path="/dashboard/reviews" element={<DashboardReviews />} />
        <Route path="/dashboard/prices" element={<DashboardPrices />} />
        <Route path="/dashboard/team" element={<DashboardTeam />} />
        <Route path="/dashboard/services" element={<DashboardServices />} />
        <Route path="/dashboard/blog" element={<DashboardBlog />} />
        <Route path="/dashboard/setting" element={<DashboardSettings />} />
        <Route path="/dashboard/profile" element={<DashboardProfile />} />
        <Route path="/dashboard/messages" element={<DashboardMessages />} />
        <Route path="/dashboard/details" element={<DashboardDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
