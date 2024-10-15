import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 3/5;
    background-color: white;
    padding: 5px;
    margin: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
    transition: background-color 0.3s ease-in-out;

    &:hover{
        background-color: #575a65;
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
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

    &.active {
        opacity: 1;
        visibility: visible;
    }
`;

export const OverlayContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const TitleWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const CategoryTitle = styled.div`
    color: white;
    font-size: 1.5rem;
    text-align: center;
`;

export const MenuWrapper = styled.div`
    height: 100%;
    width: 100%;
    bottom: 0;

`

export const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
`;

export const MenuOption = styled.div`
    height: 100%;
    height: 9rem;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
`