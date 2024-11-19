import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 300px; */
  padding: 5px;
  margin: 5px;
  aspect-ratio: 3/5;
  background-color: #2e2e2e;
  border-radius: 12px;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #575a65;
  }
  
  &.product-page {
    box-shadow: 0 0 0 5px #2e2e2e;
    max-width: 300px;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 960px) {
      aspect-ratio: 5/3;
      max-width: 400px;
    }
    
    @media screen and (min-width: 1100px) {
      max-width: 425px;
      /* aspect-ratio: 5/3; */
    }

    @media screen and (min-width: 1175px) {
      max-width: 450px;
    }

    @media screen and (min-width: 1250px) {
      max-width: 475px;
    }

    @media screen and (min-width: 1325px) {
      max-width: 500px;
    }

    @media screen and (min-width: 1400px) {
      max-width: 525px;
    }

    /* @media screen and (min-width: 1475px) {
      max-width: 500px;
    } */

    @media screen and (min-width: 1475px) {
      max-width: 550px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: rgba(10, 10, 10, 0.8);
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px; */
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 3rem;
  padding-top: 1rem;
  background-color: rgba(10, 10, 10, 0.4);
`;

export const CategoryTitle = styled.div`
  color: white;
  height: 2rem;
  font-size: 1.5rem;
  text-align: center;
`;

export const MenuWrapper = styled.div`
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  /* gap: 5px; */
`;

export const MenuOption = styled.div`
  height: 9rem;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
    box-shadow: inset 0 0 0 4px black;
  }
`;

export const OptionOverlay = styled.div`
  width: 100%;
  /* box-shadow: inset 0 0 0 4px #575a65; */
  height: 100%;
  position: absolute;
  z-index: 10;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
`;
