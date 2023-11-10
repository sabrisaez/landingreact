import React from "react";
import { products } from "../../../data/products";
import { ProductCard } from "../product_card/product_card";
import {
  BotonesContainer,
  ProductosContainer,
  ProductosWrapper,
} from "./styles";
import { Button } from "../../button/button";

export const ProductWidget = () => {
  return (
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
  );
};
