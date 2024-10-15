import { 
    CardContainer, 
    CardWrapper, 
    ImageContainer, 
    ImageWrapper, 
    TextContainer, 
    TextWrapper
} from "../styles/ProductCardStyles";

// fix/remove the on hover effect for the images
// onHover a "menu" should come up from the botoom of the
// card and cover half of the image, and display four smaller square images of 
// different related products
// instead of products section this will be the categories secion


export default function ProductCard({image}){

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