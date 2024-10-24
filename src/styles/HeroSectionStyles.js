import styled from "styled-components";

export const HeroSlider = styled.div`
  position: relative;
  width: 100%;
  height: 588px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  @media screen and (min-width: 650px) {
    height:656px;
  }

  @media screen and (min-width: 1000px) {
    height: 768px;
  }
`;

export const HeroSliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeroSliderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const OverlayTextWrapper = styled.div`
  text-align: center;
  color: white;
  h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const SlideWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.8s ease;
  opacity: ${(props) => (props.className === "active" ? "1" : "0")};
  z-index: 1;
`;

export const SlideBackground = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SliderMenuNavWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const SliderMenuNavContainer = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 5px;
      cursor: pointer;
      
      &:hover {
        background-color: #f5a623;
        transition: background-color 0.3s ease;
      }

      &.selected{
        background-color: #f5a623;
      }
    }
  }
`;

export const HeroSliderPreviousBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 3;

  &:hover {
    background-color: #f5a623;
  }
`;

export const HeroSliderNextBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 3;

  &:hover {
    background-color: #f5a623;
  }
`;
