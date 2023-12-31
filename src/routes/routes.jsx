import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layout/home/home_layout";
import { Home } from "../pages/home/home";
import { AboutUs } from "../pages/about/about";
import { ProductsPage } from "../pages/products/productspage";
import { Contactpage } from "../pages/contact/contactpage";
import { MenuProvider } from "../context/navbarContext";

export const ContainerRoutes = () => {
  return (
    <BrowserRouter>
      <MenuProvider>
        <HomeLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<Contactpage />} />
          </Routes>
        </HomeLayout>
      </MenuProvider>
    </BrowserRouter>
  );
};

export default ContainerRoutes;
