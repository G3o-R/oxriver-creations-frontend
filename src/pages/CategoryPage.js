import { useParams } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderContainer,
} from "../styles/pageStyles/CategoryPageStyles";
import ProductsSection from "../components/ProductsSection";
import WebDevSection from "../components/WebDevSection";

export default function CategoryPage({ categoriesArray }) {
  const { categoryRoute } = useParams();

  let categoryName = categoryRoute.split("-").join(" ");

  const selectedCategory = categoriesArray.find(
    (category) => category.name === categoryName
  );
  if (!selectedCategory && categoryRoute !== "") {
    return <div className="not-found">Category not found!</div>;
  }

  console.log(selectedCategory)
  const contentToDisplay = selectedCategory.name === "Web Development" ? <WebDevSection /> : <ProductsSection subCategoriesArr={selectedCategory.sub_categories} />

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <h1>{selectedCategory.name}</h1>
        </HeaderContainer>
      </HeaderWrapper>
      {contentToDisplay}
    </>
  );
}
