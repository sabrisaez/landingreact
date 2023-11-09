import { categories } from "../../../data/categories";
import { CategoryCard } from "../category_card/category_card";

export const CategoryWidget = () => {
  return (
    <div>
      <h2>Categorías</h2>
      <div>
        {categories.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
