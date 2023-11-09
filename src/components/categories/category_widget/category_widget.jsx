import { categories } from "../../../data/categories";
import { CategoryCard } from "../category_card/category_card";
import {
  CategoriasWrapper,
  CategoriasContainer,
} from "../category_widget/styles";

export const CategoryWidget = () => {
  return (
    <CategoriasWrapper>
      <h2>Categorías</h2>
      <CategoriasContainer>
        {categories.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </CategoriasContainer>
    </CategoriasWrapper>
  );
};
