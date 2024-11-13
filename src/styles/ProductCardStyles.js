import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  height: 100%;
  aspect-ratio: 3/5;
  background-color: #2e2e2e;
  padding: 1px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    background-color: #44475a;
  }

  &.small {
    aspect-ratio: 1/1;
  }

  &.display {
    flex-direction: row;
    aspect-ratio: 5/3;
    max-width: 100%;
  }

  /* @media screen and (min-width: 1080px) {
    max-width: 200px;
  }

  @media screen and (min-width: 1325px) {
    max-width: 250px;
  }

  @media screen and (min-width: 1560px) {
    max-width: 300px;
  } */
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  `;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;