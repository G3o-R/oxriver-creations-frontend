import { 
    Wrapper,
    Container,
    HeaderContainer,
    ContentWrapper,
    ContentContainer,
    NavWrapper,
    NavContainer
 } from "../styles/SliderSectionStyles";

import CategoriesCard from "./CategoriesCard";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import "swiper/css"
import BestSellerCard from "./BestSellerCards";


export default function SliderSection({productsArray, title, settings = {}}){
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

    let slidesPerView;

    if (viewportWidth <= 650) {
      slidesPerView = 1;
    } else if (type !== "general") {
      slidesPerView = 2;
    } else if (viewportWidth <= 900 && type === "general") {
      slidesPerView = 2;
    } else if (viewportWidth <= 1250 && type === "general") {
      slidesPerView = 3;
    } else {
      slidesPerView = 4;
    }
    
    
    
    // have to add an ID to the objects for the keys
    const productsToDisplay = productsArray.map((product, index) => (
        <SwiperSlide key={index}>
    {type === "BestSellers" ? (
        <BestSellerCard image={product.image} description={product.description} />
    ) : (
        <CategoriesCard categoryData={product} />
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

function handleSlideTo(index) {
    if (swiperRef.current && swiperRef.current.slideTo) {
        swiperRef.current.slideTo(index, 0);
    }
}

return (
  <Wrapper>
    <Container>
      <HeaderContainer>
        <h1>{title}</h1>
      </HeaderContainer>
      <ContentWrapper>
        <ContentContainer>
          <Swiper
            spaceBetween={20}
            slidesPerView={slidesPerView}
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
          >
            {productsToDisplay}
          </Swiper>
        </ContentContainer>
      </ContentWrapper>
      <NavWrapper className={slidesLength === slidesPerView ? "hidden" : ""}>
        <NavContainer>
          <ul>
            {productsArray.map((product, index) => {
              const isSelected =
                index >= currentIndex && index < currentIndex + slidesPerView;

              return (
                <li
                  key={product.id}
                  className={`nav-item-${index} ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() => handleSlideTo(index)}
                ></li>
              );
            })}
          </ul>
        </NavContainer>
      </NavWrapper>
    </Container>
  </Wrapper>
);
}