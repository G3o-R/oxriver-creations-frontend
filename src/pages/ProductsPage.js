import CategoriesDisplay from "../components/CategoriesDisplay";

import { 
    ProductsPage,
 } from "../styles/ProductsStyles";

export default function Products({categoriesArray}) {
  return (
    <ProductsPage>
      <CategoriesDisplay categoriesArray={categoriesArray} />
    </ProductsPage>
  );
}
