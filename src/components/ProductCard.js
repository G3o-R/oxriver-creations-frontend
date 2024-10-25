import { 
    CardContainer,
    CardWrapper,
 } from "../styles/ProductCardStyles";


export default function ProductCard({productData, orientation="small"}){
    const {image} = productData;

    return(
        <CardWrapper className={orientation}>
            <CardContainer>
                <img src={image} alt="random text here" />
            </CardContainer>
        </CardWrapper>
    )
}