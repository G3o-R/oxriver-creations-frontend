import { 
    Container,
    ImageContainer,
    ImageWrapper,
    TextContainer,
    TextWrapper,
    Wrapper,
 } from "../styles/BestSellerCardStyles";


export default function BestSellerCard({image, description, Product_name = "Product Name Here"}){
    return(
        <Wrapper>
            <Container>
                <ImageWrapper>
                    <ImageContainer>
                        <img src={image} alt="best seller image" />
                    </ImageContainer>
                </ImageWrapper>
                <TextWrapper>
                    <TextContainer>
                        <h1>{Product_name}</h1>
                        <p>{description}</p>
                    </TextContainer>
                </TextWrapper>
            </Container>
        </Wrapper>
    )
}