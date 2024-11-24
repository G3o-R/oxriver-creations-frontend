import { useState, useEffect, useRef } from "react";
import CategoriesDisplay from "../components/CategoriesDisplay";
import {
  ProductsPage,
  HeaderContainer,
  HeaderWrapper,
} from "../styles/pageStyles/ProductPageTwoStyles";
import { Outlet, useParams, useNavigate } from "react-router-dom";

export default function ProductPageTwo({ categoriesArray }) {
  const navigate = useNavigate();
  const { categoryRoute } = useParams();
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    image: "",
    name: "",
    sub_categories: [],
  });

  function handleCategorySelect(categoryObj) {
    setSelectedCategory(categoryObj);
    let routeToGoTo = categoryObj.name.split(" ").join("-");
    navigate(routeToGoTo);
  }

  let categoryToCompare;
  if (categoryRoute) {
    let categoryName = categoryRoute.split("-").join(" ");
    categoryToCompare = categoriesArray.find(
      (category) => category.name === categoryName
    );
  }

  useEffect(() => {
    if ((categoriesArray && !categoryRoute) || !categoryToCompare) {
      setSelectedCategory(categoriesArray[1]);
    } else if (categoryRoute) {
      let categoryName = categoryRoute.split("-").join(" ");
      let categoryToSelect = categoriesArray.find(
        (category) => category.name === categoryName
      );
      setSelectedCategory(categoryToSelect);
    }
  }, [categoryRoute]);

  return (
    <ProductsPage>
      <CategoriesDisplay
        categoriesArray={categoriesArray}
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
{/* this is where we'll handle it */}
      {categoryRoute ? <></> : <div>Select a Category, Find what interests you</div>}
      <Outlet />
    </ProductsPage>
  );
}
