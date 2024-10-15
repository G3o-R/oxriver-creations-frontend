import { 
    Wrapper,
    Container,
    HeaderContainer,
    ContentWrapper,
    ContentContainer
 } from "../styles/ProductsSectionStyles";

import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import "swiper/css"
import BestSellerCard from "./BestSellerCards";


export default function ProductsSection({productsArray, title, settings = {}}){
    const swiperRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesLength, setSlidesLength] = useState(0)
    const {type = "general", numSwipers = 4} = settings
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // console.log(viewportWidth)
    let slidesPerView;
// 
    if (viewportWidth <= 650 && type !== "general"){
        slidesPerView = 1
    } else if (type !== "general"){
        slidesPerView = 2
    } else {slidesPerView = 4}
    
    
    
    // have to add an ID to the objects for the keys
    const productsToDisplay = productsArray.map((product) => (
        <SwiperSlide>
    {type === "BestSellers" ? (
        <BestSellerCard image={product.image} description={product.description} />
    ) : (
        <ProductCard image={product.image} />
    )}
  </SwiperSlide>
));

const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setSlidesLength(swiper.slides.length);
};




function handleSlideChange(swiper){
    setCurrentIndex(swiper.activeIndex)
}

// add conditions to decrease the number of slidersInView based on the size of the screen

return(
    <Wrapper>
            <Container>
                <HeaderContainer>
                    <h1>{title}</h1>
                </HeaderContainer>
                <ContentWrapper>
                    <ContentContainer>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={slidesPerView}
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