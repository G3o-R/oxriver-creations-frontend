import ProductDisplay from "../components/ProductDisplay";

import { 
    ProductsPage,
 } from "../styles/ProductsStyles";

export default function Products({categoriesArray}) {

  // const categoriesToDisplay = categoriesArray.map((category) => <ProductDisplay key={category.id} category={category}/>)

  return (
    <ProductsPage>
      {/* {categoriesToDisplay[0]} */}
      <ProductDisplay categoriesArray={categoriesArray} />
    </ProductsPage>
  );
}
