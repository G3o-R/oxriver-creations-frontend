import styled from "styled-components";

export const ProductDisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ProductDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1560px;
  width: 100%;
  background-color: #e9e9e9;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
`;

export const ProductCarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  padding: 1rem;
  position: relative;
`;

export const ProductCarouselContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;

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
