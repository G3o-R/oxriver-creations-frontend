import { useState, useEffect, useRef } from "react";
import CategoriesDisplay from "../components/CategoriesDisplay";
import { 
  ProductsPage,
  HeaderContainer,
  HeaderWrapper
} from "../styles/pageStyles/ProductPageTwoStyles";
import { Outlet, useParams, useNavigate } from "react-router-dom";


export default function ProductPageTwo({ categoriesArray }) {
  const navigate = useNavigate()
  const { categoryRoute } = useParams()
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    image: "",
    name: "",
    sub_categories: [],
  });

  function handleCategorySelect(categoryObj) {
    setSelectedCategory(categoryObj);
    let routeToGoTo = categoryObj.name.split((" ")).join("-")
    navigate(routeToGoTo)
  }

  useEffect(() => {
    if (categoriesArray && !categoryRoute) {
      setSelectedCategory(categoriesArray[1]);
    }
  }, []);

  useEffect(() => {
    if(categoryRoute){
      let categoryName = categoryRoute.split("-").join(" ")
      let categoryToSelect = categoriesArray.find((category) => category.name ===  categoryName)
      setSelectedCategory(categoryToSelect)
    }

  },[categoryRoute])

  return (
    <ProductsPage>
      <CategoriesDisplay
        categoriesArray={categoriesArray}
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <Outlet />
    </ProductsPage>
  );
}
