import { CardContainer, CardWrapper } from "../styles/ProductCardStyles";

export default function ProductCard({
  productData,
  handleProductSelect,
  type = "",
}) {
  const { image } = productData;

  return (
    <CardWrapper
      className={`product-card ${type} ${productData.id}`}
      onClick={
        type === "small"
          ? () => {
              handleProductSelect(productData.id);
            }
          : null
      }
    >
      <CardContainer>
        <img src={image} alt="random text here" loading="lazy" />
      </CardContainer>
    </CardWrapper>
  );
}
