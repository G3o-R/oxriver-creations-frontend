import { Overlay, Slide, MenuNav } from "hero-slider";
import { 
    StyledHeroSlider,
    Wrapper,
    Title,
    Subtitle
 } from "../styles/HeroSectionStyles";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function HeroSection() {
  return (
    <StyledHeroSlider
      height={"100vh"}
    //   autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay className="this-is-the-overlay">
        <Wrapper>
          <Title>Basic Setup</Title>
          <Subtitle>
            Check out the documentation for more advanced examples.
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        // shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass,
          backgroundAnimation: "zoom",
        }}
      />

      <Slide
        // shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco,
          backgroundAnimation: "zoom",
        }}
      />

      <Slide
        // shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare,
          backgroundAnimation: "zoom",
        }}
      />

      <Slide
        // shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock,
          backgroundAnimation: "zoom",
        }}
      />

      <MenuNav />
    </StyledHeroSlider>
  );
}
