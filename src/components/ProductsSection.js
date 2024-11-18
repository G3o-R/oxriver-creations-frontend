import { DynamicContainer, ProductSliderContainer, SubCategoryHeader, SubCategorySection, SubSectionWrapper } from "../styles/ProductSectionStyles";
import ProductsSlider from "./ProductsSlider";

export default function ProductsSection({ subCategoriesArr = [] }) {
  
  const subCategoriesToDisplay = subCategoriesArr.map((subCategory) => {
    let arr = [];
    let productPair = [];
    if (subCategoriesArr.length > 0) {
      subCategory.products_array.forEach((product) => {
        productPair.push(product);
  
        if (productPair.length === 2) {
          arr.push(productPair);
          productPair = [];
        }
      });
    }
  
    if (productPair.length > 0) {
      arr.push(productPair);
    }
    return (
      <SubSectionWrapper className="subsection-container">
        <SubCategorySection>
          <SubCategoryHeader>
            <h1>Name Here</h1>
          </SubCategoryHeader>
          <ProductSliderContainer>
            <ProductsSlider pairedProductsArray={arr}/>
          </ProductSliderContainer>
        </SubCategorySection>
      </SubSectionWrapper>
    )
  })

  return (
  <DynamicContainer>
    {/* whats wrapped in here should be for each subcategory */}
    {subCategoriesToDisplay}
    {/* whats wrapped in here should be for each subcategory */}
      </DynamicContainer>
  );
}
