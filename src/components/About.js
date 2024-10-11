import { AboutWrapper, AboutSection, HeaderContainer } from "../styles/AboutStyles";
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


    return(
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
                    <SwiperSlide> <AboutCrafts /> </SwiperSlide>
                    <SwiperSlide> <AboutPrints /> </SwiperSlide>
                </Swiper>
            </AboutSection>
        </AboutWrapper>
    )
}