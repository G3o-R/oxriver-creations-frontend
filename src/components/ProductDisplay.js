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
 import { Swiper, SwiperSlide} from "swiper/react";
 import { useState, useRef } from "react";
 import "swiper/css"



export default function ProductDisplay({category}){
    const {image, name, products} = category

    const swiperRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesLength, setSlidesLength] = useState(0)

    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper;
        setSlidesLength(swiper.slides.length);
    };
    
    function handleSlideChange(swiper){
        setCurrentIndex(swiper.activeIndex)
    }

    const productsToDisplay = products.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductCard productData={product} />
      </SwiperSlide>
    ));

    return (
        <ProductDisplayWrapper>
            <ProductDisplayContainer>
                <ImageWrapper>
                    <ImageContainer>
                        <img src={image} alt="don't know yet"/>
                    </ImageContainer>
                    <Overlay>
                        <h1>{name}</h1>
                    </Overlay>
                </ImageWrapper>
                <ProductCarouselWrapper>
                    <ProductCarouselContainer>
                        <Swiper
                        spaceBetween={0}
                        slidesPerView={8}
                        onSwiper={handleSwiperInit}
                        onSlideChange={handleSlideChange}
                        >
                            {productsToDisplay}
                        </Swiper>
                    </ProductCarouselContainer>
                </ProductCarouselWrapper>
            </ProductDisplayContainer>
        </ProductDisplayWrapper>
    )
}