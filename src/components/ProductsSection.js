import { 
    Wrapper,
    Container,
    HeaderContainer,
    ContentWrapper,
    ContentContainer
 } from "../styles/ProductsSectionStyles";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"

export default function ProductsSection({productsArray}){
    return(
        <Wrapper>
            <Container>
                <HeaderContainer>
                    <h1>Products</h1>
                </HeaderContainer>
                <ContentWrapper>
                    <ContentContainer>
                        {/* an array of products would go here */}
                    </ContentContainer>
                </ContentWrapper>
            </Container>
        </Wrapper>
    )
}