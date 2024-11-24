import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import "swiper/css/navigation";
import "swiper/css";
import {
  Container,
  Wrapper,
  SliderWrapper,
  SliderContainer,
  NavButton,
} from "../styles/ProductSliderStyles";

export default function ProductsSlider({
  pairedProductsArray,
  settings,
  title = "Title Here",
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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

  const productsToDisplay = pairedProductsArray.map((productPair, index) => (
    <SwiperSlide key={index}>
      <ProductCard productPairData={productPair} />
    </SwiperSlide>
  ));

  return (
    <Wrapper>
      <Container>
        <SliderWrapper>
          <SliderContainer id="slider-container">
            <Swiper
              modules={[Navigation]} // Include Navigation Module
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={0}
              slidesPerView={isMobile ? 4 : 5}
              onSwiper={handleSwiperInit}
              onSlideChange={handleSlideChange}
            >
              {productsToDisplay}
              <NavButton className="swiper-button-prev"></NavButton>
              <NavButton className="swiper-button-next"></NavButton>
            </Swiper>
          </SliderContainer>
        </SliderWrapper>
      </Container>
    </Wrapper>
  );
}
