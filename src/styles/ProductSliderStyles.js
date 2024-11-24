import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  `;

export const SliderWrapper = styled.div`
  width: 100%;
  /* padding: 20px 0; */
`;

export const SliderContainer = styled.div`
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavButton = styled.button`
  background-color: rgba(10, 10, 10, 0.5);
  border: none;
  width: 50px;
  padding: 0;
  height: 100%;
  margin: 0;
  &.swiper-button-next{
    top: var(--swiper-navigation-top-offset, 0%);
    right: var(--swiper-navigation-sides-offset, 0px);
    left: auto;
}

  &.swiper-button-prev{
    top: var(--swiper-navigation-top-offset, 0%);
    left: var(--swiper-navigation-sides-offset, 0px);
    right: auto;
}

  &::after{
    color: #f7f7f7;
    font-size: 28px;
    font-weight: 700;
  }
`;