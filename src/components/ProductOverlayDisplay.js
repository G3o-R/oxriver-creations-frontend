import {
  CloseBtn,
  ContentContainer,
  ContentWrapper,
  DescriptionContainer,
  DescriptionWrapper,
  DisplayContainer,
  DisplayWrapper,
  DisplayedImageContainer,
  DisplayedImageWrapper,
  ImageContainer,
  ImageWrapper,
  OverlayContainer,
  PhotoSlidesContainer,
  PhotoSlidesWrapper,
} from "../styles/ProductOverlayDisplayStyles";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";

export default function ProductOverlayDisplay({
  isActive,
  productData,
  onClose,
}) {
  const swiperRef = useRef(null);
  const { photo_array } = productData;
  const [selectedPhoto, setSelectedPhoto] = useState(photo_array[0]);
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

  // I'll add actual keys/id's when I get real content
  const imagesToDisplay = photo_array.map((photo, index) => (
    <SwiperSlide key={index}>
      <ImageWrapper>
        <ImageContainer>
          <img src={photo} alt="product image" />
        </ImageContainer>
      </ImageWrapper>
    </SwiperSlide>
  ));

  return (
    <OverlayContainer
      className={`overlay-container ${isActive ? "active" : ""}`}
    >
      <CloseBtn onClick={onClose}>x</CloseBtn>
      <DisplayWrapper>
        <DisplayContainer>
          <ContentWrapper>
            <ContentContainer>
              <DisplayedImageWrapper>
                <DisplayedImageContainer>
                  <img src={selectedPhoto} alt="random text" />
                </DisplayedImageContainer>
              </DisplayedImageWrapper>
              <DescriptionWrapper>
                <DescriptionContainer>
                  <h1>product name</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </DescriptionContainer>
              </DescriptionWrapper>
            </ContentContainer>
          </ContentWrapper>
          <PhotoSlidesWrapper className="photo-slides-wrapper">
            <PhotoSlidesContainer className="photo-slides-container">
              <Swiper
                spaceBetween={0}
                slidesPerView={5}
                onSwiper={handleSwiperInit}
                onSlideChange={handleSlideChange}
              >
                {imagesToDisplay}
              </Swiper>
            </PhotoSlidesContainer>
          </PhotoSlidesWrapper>
        </DisplayContainer>
      </DisplayWrapper>
    </OverlayContainer>
  );
}
