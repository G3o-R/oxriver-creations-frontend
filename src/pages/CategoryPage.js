import { useParams } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderContainer,
} from "../styles/pageStyles/ProductPageTwoStyles";
import ProductsSection from "../components/ProductsSection";

export default function CategoryPage({ categoriesArray }) {
  const { categoryRoute } = useParams();

  let categoryName = categoryRoute.split("-").join(" ");

  const selectedCategory = categoriesArray.find(
    (category) => category.name === categoryName
  );
  if (!selectedCategory && categoryRoute) {
    return <div className="not-found">Category not found!</div>;
  } else if (!categoryRoute) {
    console.log("not category selected");
  }

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <h1>{selectedCategory.name}</h1>
        </HeaderContainer>
      </HeaderWrapper>
      <ProductsSection subCategoriesArr={selectedCategory.sub_categories} />
    </>
  );
}
