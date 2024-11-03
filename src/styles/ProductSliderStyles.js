import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const Container = styled.div`
  margin: 0 auto;
  `;

export const HeaderWrapper = styled.div`
  text-align: left;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const HeaderContainer = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const SliderContainer = styled.div`
  position: relative;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
