import styled from "styled-components";

export const HomePage = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111;
  border-radius: 0px 0px 128px 128px; 
  box-shadow: 0px 0px 200px 200px rgb(17,17,17);
  @media screen and (min-width: 1080px) {
    width: 80%;
    padding: 0px 20px;
    
  }
`;