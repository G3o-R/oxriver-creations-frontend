import {
  ImageContainer,
  ImageWrapper,
  Overlay,
  ProductCarouselContainer,
  ProductCarouselWrapper,
  ProductDisplayContainer,
  ProductDisplayWrapper,
} from "../styles/ProductDisplayStyles";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "swiper/css";

export default function ProductDisplay({ category }) {
  const { image, name, products } = category;
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
  console.log(viewportWidth)

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

  const productsToDisplay = products.map((product, index) => {
    const distanceFromCenter = Math.abs(currentIndex + 2 - index);
    const scale = 1 - 0.1 * distanceFromCenter;
    const marginBottom = 20 + distanceFromCenter * 25;

    return (
      <SwiperSlide key={product.id}>
        <motion.div
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
          animate={{ scale, marginBottom }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <ProductCard productData={product} />
        </motion.div>
      </SwiperSlide>
    );
  });

  return (
    <ProductDisplayWrapper>
      <ProductDisplayContainer>
        <ImageWrapper>
          <ImageContainer>
            <img src={image} alt="don't know yet" />
            <Overlay>
              <h1>{name}</h1>
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
              {productsToDisplay}
            </Swiper>
          </ProductCarouselContainer>
        </ProductCarouselWrapper>
      </ProductDisplayContainer>
    </ProductDisplayWrapper>
  );
}
