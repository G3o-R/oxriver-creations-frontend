import { 
    CardContainer,
    CardWrapper,
 } from "../styles/ProductCardStyles";


export default function ProductCard({productData}){
    const {image} = productData;

    return(
        <CardWrapper className="product-card">
            <CardContainer>
                <img src={image} alt="random text here" />
            </CardContainer>
        </CardWrapper>
    )
}