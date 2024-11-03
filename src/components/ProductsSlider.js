import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ProductCard from "./ProductCard";
import ProductOverlayDisplay from "./ProductOverlayDisplay";
import "swiper/css";
import {
  HeaderContainer,
  HeaderWrapper,
  Container,
  Wrapper,
  SliderWrapper,
  SliderContainer,
} from "../styles/ProductSliderStyles";

export default function ProductsSlider({ productsArray, settings, title = "Title Here" }) {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setSlidesLength(swiper.slides.length);
  };

  function handleSlideChange(swiper) {
    setCurrentIndex(swiper.activeIndex);
  }

  function handleSlideTo(index) {
    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(index, 0);
    }
  }

  const productsToDisplay = productsArray.map((product) => (
    <SwiperSlide key={product.id}>
        <ProductCard productData={product}  />
    </SwiperSlide>
  ))

  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <HeaderContainer>
            <h1>{title}</h1>
          </HeaderContainer>
        </HeaderWrapper>
        <SliderWrapper>
          <SliderContainer id="slider-container">
            <Swiper
              loop={true}
              spaceBetween={20}
              slidesPerView={6.5}
              onSwiper={handleSwiperInit}
              onSlideChange={handleSlideChange}
            >
                {productsToDisplay}
            </Swiper>
          </SliderContainer>
        </SliderWrapper>
      </Container>
    </Wrapper>
  );
}
