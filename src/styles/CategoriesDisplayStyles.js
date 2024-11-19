import styled from "styled-components";

export const CategoryDisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  `;

export const CategoryDisplayContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1860px;
  width: 100%;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  top: 0;
  max-width: 1560px;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const ImageContainer = styled.div`
  position: relative;
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
    margin-top: 8rem;
  }
`;

export const CategoryCarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  /* padding-right: 20px; */
  /* margin-right: 24px;  */
  padding: 0;
  z-index: 2;
  margin-top: -250px;

  @media screen and (min-width: 1080px) {
    margin-top: -200px;
  }
    
  @media screen and (min-width: 1325px) {
    margin-top: -175px;
  }
    
  @media screen and (min-width: 1560px) {
    margin-top: -150px;
  }
`;


export const CategoryCarouselContainer = styled.div`
  position: relative;
  max-width: 1560px;
  overflow: hidden;
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: center;
  .swiper {
      width: 100%;
      height: 100%;
  }

  .swiper-slide {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavButton = styled.button`
  background-color: rgba(10, 10, 10, 0.2);
  border: none;
  border-radius: 50%;
  aspect-ratio: 1/1;
  height: 50px;
  width: 50px;
  &::after{
    color: #c2c2c2;
    font-size: 28px;
    font-weight: 700;
  }
`;