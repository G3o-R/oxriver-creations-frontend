import { 
    Wrapper,
    Container,
    HeaderContainer,
    ContentWrapper,
    ContentContainer
 } from "../styles/ProductsSectionStyles";

import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"

export default function ProductsSection({productsArray}){

const productsToDisplay = productsArray.map((product) => (<ProductCard productData={product}/>))
    return(
        <Wrapper>
            <Container>
                <HeaderContainer>
                    <h1>Products</h1>
                </HeaderContainer>
                <ContentWrapper>
                    <ContentContainer>
                        {/* an array of products would go here */}
                        {productsToDisplay}
                    </ContentContainer>
                </ContentWrapper>
            </Container>
        </Wrapper>
    )
}