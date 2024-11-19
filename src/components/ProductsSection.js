import { DynamicContainer, HeaderContainer, HeaderWrapper, ProductSliderContainer, SubCategoryHeader, SubCategorySection, SubSectionWrapper } from "../styles/ProductSectionStyles";
import ProductsSlider from "./ProductsSlider";

export default function ProductsSection({ subCategoriesArr}) {
  
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
      <SubSectionWrapper key={subCategory.id} className="subsection-container">
        <SubCategorySection>
          <HeaderWrapper className="header-wrapper">
            <HeaderContainer className="header-container">
              <h1>{subCategory.name}</h1>
            </HeaderContainer>
          </HeaderWrapper>
          <ProductSliderContainer>
            <ProductsSlider pairedProductsArray={arr}/>
          </ProductSliderContainer>
        </SubCategorySection>
      </SubSectionWrapper>
    )
  })

  return (
  <DynamicContainer className="dynamic-container">
    {subCategoriesToDisplay}
  </DynamicContainer>
  );
}
