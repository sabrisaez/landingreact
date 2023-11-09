export const ProductCard = ({ img, tittle, desc, price }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h2>{tittle}</h2>
      <p>{desc}</p>
      <div>
        <p>${price}</p>
        <button>Agregar</button>
      </div>
    </div>
  );
};
