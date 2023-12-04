import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layout/home/home_layout";
import { Home } from "../pages/home/home";
import { AboutUs } from "../pages/about/about";
import { ProductsPage } from "../pages/products/productspage";
import { Contactpage } from "../pages/contact/contactpage";

export const ContainerRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/about"
          element={
            <HomeLayout>
              <AboutUs />
            </HomeLayout>
          }
        />
        <Route
          path="/products"
          element={
            <HomeLayout>
              <ProductsPage />
            </HomeLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <HomeLayout>
              <Contactpage />
            </HomeLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
