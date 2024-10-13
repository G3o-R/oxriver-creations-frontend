import { 
    CardContainer, 
    CardWrapper, 
    ImageContainer, 
    ImageWrapper 
} from "../styles/ProductCardStyles";


export default function ProductCard({productData}){
    const {image} = productData
    return(
        <CardWrapper>
            <CardContainer>
                <ImageWrapper>
                    <ImageContainer>
                        <img src={image} alt="Product Image"/>
                    </ImageContainer>
                </ImageWrapper>
            </CardContainer>
        </CardWrapper>
    )    
}