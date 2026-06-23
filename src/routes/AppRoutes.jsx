import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Markets from "../pages/Markets/Markets";
import Caribbean from "../pages/Caribbean/Caribbean";
import Blog from "../pages/Blog/Blog";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
const BlogDetail = lazy(() => import("../pages/Blog/BlogDetail"));
const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/caribbean" element={<Caribbean />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
