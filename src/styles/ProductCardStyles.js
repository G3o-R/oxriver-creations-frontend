import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 175px;
  width: 100%;
  height: 100%;
  aspect-ratio: 3/5;
  background-color: #2e2e2e;
  padding: 5px;
  margin: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #575a65;
  }

  @media screen and (min-width: 1080px) {
    max-width: 200px;
  }

  @media screen and (min-width: 1325px) {
    max-width: 250px;
  }

  @media screen and (min-width: 1560px) {
    max-width: 300px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
