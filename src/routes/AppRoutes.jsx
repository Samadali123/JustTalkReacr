import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Solutions from "../pages/Solutions"
import About from "../pages/AboutUs";
import Contact from "../pages/ContactUs";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import IndustryDetail from "../pages/IndustryDetail";
import NotFound from "../pages/NotFound";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/features" element={<Features />} />
      <Route path="/industry/:slug" element={<IndustryDetail />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


