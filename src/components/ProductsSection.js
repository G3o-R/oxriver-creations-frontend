import { 
    Wrapper,
    Container,
    HeaderContainer,
    ContentWrapper,
    ContentContainer
 } from "../styles/ProductsSectionStyles";

import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css"

export default function ProductsSection({productsArray}){
    const swiperRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesLength, setSlidesLength] = useState(0)

const productsToDisplay = productsArray.map((product) => 
    (<SwiperSlide><ProductCard productData={product}/></SwiperSlide>))

const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setSlidesLength(swiper.slides.length);
};




function handleSlideChange(swiper){
    setCurrentIndex(swiper.activeIndex)
}


    return(
        <Wrapper>
            <Container>
                <HeaderContainer>
                    <h1>Products</h1>
                </HeaderContainer>
                <ContentWrapper>
                    <ContentContainer>
                        {/* an array of products would go here */}
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={4}
                            className="my-swiper-here"
                            onSwiper={handleSwiperInit}
                            onSlideChange={handleSlideChange}
                        >
                            {productsToDisplay}
                        </Swiper>
                    </ContentContainer>
                </ContentWrapper>
            </Container>
        </Wrapper>
    )
}