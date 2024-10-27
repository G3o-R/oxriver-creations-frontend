import {
  ImageContainer,
  ImageWrapper,
  Overlay,
  ProductCarouselContainer,
  ProductCarouselWrapper,
  ProductDisplayContainer,
  ProductDisplayWrapper,
} from "../styles/ProductDisplayStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import ProductCard from "./ProductCard";

export default function ProductDisplay({ categoriesArray }) {
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
  const doubledCategoryArray = categoriesArray.concat(categoriesArray)
  const categoriesToDisplay = doubledCategoryArray.map((category, index) => {
    const distanceFromCenter = Math.abs(currentIndex + 2 - index);
    const scale = 1 - 0.1 * distanceFromCenter;
    const marginBottom = 20 + distanceFromCenter * 25;

    return (
      <SwiperSlide key={index}>
        <motion.div
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
          animate={{ scale, marginBottom }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <ProductCard productData={category} />
        </motion.div>
      </SwiperSlide>
    );
  });

  return (
    <ProductDisplayWrapper>
      <ProductDisplayContainer>
        <ImageWrapper>
          <ImageContainer>
            <img
              src={
                "https://www.shutterstock.com/shutterstock/photos/2522618959/display_1500/stock-photo-photo-restaurant-equipment-modern-industrial-kitchen-with-furniture-window-2522618959.jpg"
              }
              alt="don't know yet"
            />
            <Overlay>
              <h1>text here</h1>
            </Overlay>
          </ImageContainer>
        </ImageWrapper>
        <ProductCarouselWrapper>
          <ProductCarouselContainer>
            <Swiper
              spaceBetween={-50}
              slidesPerView={window.innerWidth < 768 ? 3 : 5}
              onSwiper={handleSwiperInit}
              onSlideChange={handleSlideChange}
            >
              {categoriesToDisplay}
            </Swiper>
          </ProductCarouselContainer>
        </ProductCarouselWrapper>
      </ProductDisplayContainer>
    </ProductDisplayWrapper>
  );
}
