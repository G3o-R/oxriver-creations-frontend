import styled from "styled-components";

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  color: #ffffff;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5555;
  }
`;

export const DisplayWrapper = styled.div`
  max-width: 800px;
  width: 90%;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: scaleUp 0.3s ease forwards;

  @keyframes scaleUp {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const DescriptionContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    margin: 0;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    margin-top: 10px;
  }
`;

export const PhotoSlidesWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  overflow-x: auto;
`;

export const PhotoSlidesContainer = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 100px;
    height: 75px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;
