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

 const threeDPrintStockImg = "https://media.istockphoto.com/id/1182074642/photo/the-3d-printing-machine-make-the-3d-prototype-model-by-resin-material.jpg?s=1024x1024&w=is&k=20&c=KwKN71AOAbQvTBjKYmUVg_78jOhk0chPMNQY1LoC-Po="

 const paintingStockImg = "https://www.shutterstock.com/shutterstock/photos/1540650029/display_1500/stock-photo-female-artist-works-on-abstract-oil-painting-moving-paint-brush-energetically-she-creates-modern-1540650029.jpg"

 const craftingBackgroundImg = "./vecteezy_ai-generated-crafts-advertisment-background-with-copy-space_37245138.jpg"

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
            <h1>text here</h1>
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