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


export default function HeroSection({slidesArray}){

  const slidesToDisplay = slidesArray.map((slideObj) => (
    <SlideWrapper>
      <SlideBackground>
        <img src={slideObj.image} alt="don't know yet" />
      </SlideBackground>
      {/* we could probably add text here pertaining to the slide */}
    </SlideWrapper>
  ))


  return(
    <HeroSlider>
      <HeroSliderWrapper>
        <HeroSliderOverlay>
          <OverlayTextWrapper>
            <h1>text here</h1>
            <h2>text here</h2>
          </OverlayTextWrapper>
        </HeroSliderOverlay>
        {slidesToDisplay}
        <SliderMenuNavWrapper>
          <SliderMenuNavContainer>
            <ul>
              {/* 
              this would be a list associated with the slides
              don't know how to build that yet
              */}
              <li></li>
            </ul>
          </SliderMenuNavContainer>
        </SliderMenuNavWrapper>
        {/* here would be the Previous and Next btns */}
      </HeroSliderWrapper>
    </HeroSlider>
  )
}