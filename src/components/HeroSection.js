import { useState, useEffect, useRef } from "react";
import { 
  HeroSliderOverlay,
  OverlayTextWrapper,
  SlideBackground,
  SlideWrapper,
  HeroSlider,
  HeroSliderWrapper,
  SliderMenuNavWrapper,
  SliderMenuNavContainer,
 } from "../styles/HeroSectionStyles";

 const threeDPrintStockImg = "https://www.shutterstock.com/shutterstock/photos/2250205475/display_1500/stock-photo-fdm-d-printer-with-delta-kinematic-layout-makes-a-flange-part-with-internal-structure-from-silver-2250205475.jpg"

 const paintingStockImg = "https://www.shutterstock.com/shutterstock/photos/2475382567/display_1500/stock-photo-hands-tablet-or-person-reading-screen-for-business-with-online-advice-review-feedback-and-2475382567.jpg"

 const craftingBackgroundImg = "https://www.shutterstock.com/shutterstock/photos/2425315979/display_1500/stock-photo-process-of-printing-image-on-clothes-heat-press-machine-printing-custom-design-on-t-shirt-and-2425315979.jpg"

export default function HeroSection(){

  const [ activeIndex, setActiveIndex ] = useState(0)
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  function handleSelect(e){
    let i = parseInt(e.target.id);
    setActiveIndex(i);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  return (
    <HeroSlider>
      <HeroSliderWrapper>
        <HeroSliderOverlay>
          <OverlayTextWrapper>
            <h1>Text Here</h1>
            <h2>text here</h2>
          </OverlayTextWrapper>
        </HeroSliderOverlay>

        <SlideWrapper
          className={activeIndex === 0 ? "active" : "inactive"}
          id="slide-1"
        >
          <SlideBackground>
            <img src={threeDPrintStockImg} alt="don't know yet" />
          </SlideBackground>
        </SlideWrapper>

        <SlideWrapper
          className={activeIndex === 1 ? "active" : "inactive"}
          id="slide-1"
        >
          <SlideBackground>
            <img src={paintingStockImg} alt="don't know yet" />
          </SlideBackground>
        </SlideWrapper>

        <SlideWrapper
          className={activeIndex === 2 ? "active" : "inactive"}
          id="slide-1"
        >
          <SlideBackground>
            <img src={craftingBackgroundImg} alt="don't know yet" />
          </SlideBackground>
        </SlideWrapper>

        <SliderMenuNavWrapper>
          <SliderMenuNavContainer>
            <ul>
              <li
                name="option-1"
                id="0"
                className={activeIndex === 0 ? "selected" : ""}
                onClick={(e) => handleSelect(e)}
              ></li>
              <li
                name="option-2"
                id="1"
                className={activeIndex === 1 ? "selected" : ""}
                onClick={(e) => handleSelect(e)}
              ></li>
              <li
                name="option-3"
                id="2"
                className={activeIndex === 2 ? "selected" : ""}
                onClick={(e) => handleSelect(e)}
              ></li>
            </ul>
          </SliderMenuNavContainer>
        </SliderMenuNavWrapper>
      </HeroSliderWrapper>
    </HeroSlider>
  );
}