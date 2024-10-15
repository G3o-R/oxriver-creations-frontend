import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 300px; */
    width: 100%;
    aspect-ratio: 3/5;
    background-color: white;
    padding: 5px;
    margin: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
`;

export const CardContainer = styled.div`
    display: flex;
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
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }
`;


export const TextWrapper = styled.div`

`;

export const TextContainer = styled.div`

`