import {
  ImageContainer,
  ImageWrapper,
  Overlay,
  CategoryCarouselContainer,
  CategoryCarouselWrapper,
  CategoryDisplayContainer,
  CategoryDisplayWrapper,
} from "../styles/CategoriesDisplayStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import ProductCard from "./ProductCard";

export default function CategoriesDisplay({ categoriesArray, handleCategorySelect, selectedCategory }) {
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
          onClick={()=> handleCategorySelect(category)}
        >
          {/* change the name of this soon or figure out how to make it work w CategoryCard */}
          <ProductCard productData={category} />
        </motion.div>
      </SwiperSlide>
    );
  });

  // const nameThisVarLater = selectedCategory ? selectedCategory.image : 

  return (
    <CategoryDisplayWrapper>
      <CategoryDisplayContainer>
        <ImageWrapper>
          <ImageContainer>
            <img
              src={selectedCategory.image}
              alt="don't know yet"
            />
            <Overlay>
              <h1>{selectedCategory.name}</h1>
            </Overlay>
          </ImageContainer>
        </ImageWrapper>
        <CategoryCarouselWrapper>
          <CategoryCarouselContainer>
            <Swiper
              spaceBetween={-50}
              slidesPerView={window.innerWidth < 768 ? 3 : 5}
              onSwiper={handleSwiperInit}
              onSlideChange={handleSlideChange}
            >
              {categoriesToDisplay}
            </Swiper>
          </CategoryCarouselContainer>
        </CategoryCarouselWrapper>
      </CategoryDisplayContainer>
    </CategoryDisplayWrapper>
  );
}
