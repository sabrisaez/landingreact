import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layout/home/home_layout";
import { Home } from "../pages/Home/Home";
import { AboutUs } from "../pages/about/about";
import { ProductsPage } from "../pages/products/productspage";
import { Contactpage } from "../pages/contact/contactpage";

export const ContainerRoutes = () => {
  return (
    <BrowserRouter>
      <HomeLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </HomeLayout>
    </BrowserRouter>
  );
};
