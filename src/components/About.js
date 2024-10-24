import { 
    AboutWrapper, 
    AboutSection, 
    HeaderContainer,
    NavWrapper,
    NavContainer
} from "../styles/AboutStyles";
import { useRef,useState } from "react";
import { AboutCrafts, AboutPrints } from "./AboutCards";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"


export default function About(){
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

    function handleSlideTo(index) {
        if (swiperRef.current && swiperRef.current.slideTo) {
            swiperRef.current.slideTo(index, 0);
        }
    }

    return (
      <AboutWrapper>
        <AboutSection>
          <HeaderContainer>
            <h1>About</h1>
          </HeaderContainer>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            className="my-swiper-here"
            onSwiper={handleSwiperInit}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              {" "}
              <AboutCrafts />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <AboutPrints />{" "}
            </SwiperSlide>
          </Swiper>
          <NavWrapper>
            <NavContainer>
              <ul>
                <li
                  className={currentIndex === 0 ? "selected" : ""}
                  onClick={() => handleSlideTo(0)}
                ></li>
                <li
                  className={currentIndex === 1 ? "selected" : ""}
                  onClick={() => handleSlideTo(1)}
                ></li>
              </ul>
            </NavContainer>
          </NavWrapper>
        </AboutSection>
      </AboutWrapper>
    );
}