import styled from "styled-components";

export const ProductsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  gap: 120px;
`;

export const ProductDisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  `;

export const ProductDisplayContainer = styled.div`
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