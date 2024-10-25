import styled from "styled-components";

export const ProductsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const ProductsWrapper = styled.div`
  background-color: #2e2e2e;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  max-width: 1080px;
`;

export const ProductsContainer = styled.div`
  padding: 20px;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); // Responsive grid
  grid-auto-rows: 240px;
  grid-auto-flow: dense;
  grid-gap: 15px;

  .tall {
    grid-column: span 1 / auto;
    grid-row: span 2 / auto;
  }

  .large {
    grid-column: span 2 / auto;
    grid-row: span 2 / auto;
  }

  .wide {
    grid-column: span 2 / auto;
    grid-row: span 1 / auto;
  }

  .small {
    grid-column: span 1 / auto;
    grid-row: span 1 / auto;
  }
`;
