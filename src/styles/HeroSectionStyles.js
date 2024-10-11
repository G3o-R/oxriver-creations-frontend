import styled from "styled-components";
import HeroSlider from "hero-slider";

export const StyledHeroSlider = styled(HeroSlider)`
  /* wrapper */
  .HeroSlider-module_Wrapper__TaeBr {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    animation: HeroSlider-module_fade-in__5as8N
      var(--slider-fade-in-duration, 100) ease-in;

    /* the overlay */
    .index-module_Container__uwyVd {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      pointer-events: none;
    }

    .hero-slider-overlay {
      color: white;
      background-color: rgba(0, 0, 0, 0.15);
    }

    /* everything related to the images/slides */
    .index-module_Slide__vy4u2 {
      transition: transform 0ms ease-in-out var(--sliding-delay, 0ms);
      will-change: transform;
    }

    .index-module_Slide__vy4u2,
    .index-module_Container__zFpuF {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translate3d(0, 0, 0);
      overflow: hidden;
    }

    .index-module_Active__5-5Mj {
      z-index: 2;
      transform: translate3d(0, 0, 0);
      transition-delay: var(--sliding-delay, 0ms);

      .index-module_Background__hqV3F {
        position: absolute;
        width: 100%;
        height: 100%;

        .index-module_ZoomOut__V4Peh {
    transform: scale(1.5);
    animation: index-module_fade-in__M3j53 300ms ease-in-out 0ms forwards, 
    index-module_zoom-out__QDhiM var(--background-animation-duration, 30000ms) ease-in-out var(--background-animation-delay, 100ms) forwards;
}
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  pointer-events: none;
`;

export const Title = styled.h1`
  margin: 0 auto;
  padding: 0;
  text-transform: uppercase;
  width: 90%;
  text-align: center;
  font-size: 3.5rem;
`;

export const Subtitle = styled.h2`
  margin: 24px auto 0;
  padding: 0;
  width: 80%;
  text-align: center;
  font-size: 1.75rem;
`;
