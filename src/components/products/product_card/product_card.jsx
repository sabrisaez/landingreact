import React from "react";
import { ProductoCard } from "./styles";
import { Button } from "../../button/button";

export const ProductCard = ({ img, title, desc, price }) => {
  return (
    <ProductoCard>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <div>
        <p>${price}</p>
        <Button>Agregar</Button>
      </div>
    </ProductoCard>
  );
};
