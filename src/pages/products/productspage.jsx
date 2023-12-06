import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import { HomeLayout } from "../../layout/home/home_layout";
import { Footer } from "../../components/footer/footer";
import { ProductCard } from "../../components/products/product_card/product_card";
import {
  BotonesContainer,
  ProductosContainer,
  ProductosWrapper,
} from "../../components/products/product_widget/styles";
import { Button } from "../../components/button/button";
import { products } from "../../data/products";

export const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <HomeLayout></HomeLayout>
      <ProductosWrapper>
        <h2>Store</h2>
        <ProductosContainer>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductosContainer>
        <BotonesContainer>
          <Button>Ver más</Button>
          <Button>Ver menos</Button>
        </BotonesContainer>
      </ProductosWrapper>
      <Footer />
    </div>
  );
};
