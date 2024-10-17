import styled from "styled-components";

export const ServicesPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  position: relative;

  h1 {
    color: white;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 10em;
    h1 {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1200px;
`;

export const DisplayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 40px;
  overflow: hidden;

  ul {
    font-size: 1.3rem;
    text-align: left;
    color: white;
    margin: 5px;
    padding-inline-start: 20px;
    padding-inline-end: 20px;
    transition: transform 0.3s, background-color 0.3s;
    padding: 20px;
    position: relative;

    &:hover {
      transform: translateY(-5px);
      background-color: #f5a623;
      color: #000;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 1px;
      height: 100px;
      background-color: white;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    ul:nth-child(2n)::before {
      display: none;
    }
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;

    ul::before {
      display: none;
    }
  }
`;


export const MethodsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .PS{
    color: white;
    margin: 0px 20px 20px 20px;
  }
  &.contact-info{
    margin:0;

}
`;

export const MethodsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: white;
  
  h3::before {
      content: "•";
      margin: 0px 20px;  
    }
    
    h3:first-child::before {
        content: "";
    }
    
    h3 {
        font-size: 1.5rem;
        color: white;
        text-align: center;
        transition: color 0.3s;
        /* margin: 20px 0px 10px 0px; */
        
        &:hover {
            color: #f5a623;
        }
    }
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    
    @media screen and (max-width: 450px) {
        h3 {
            font-size: 1.2rem;
        }
    }
    `;

export const ContactInfoWrapper = styled(MethodsWrapper)`

`;

export const ContactInfoContainer = styled(MethodsContainer)`

  h3 {
    margin:0;
  }
`;

export const CustomWebsitesWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  `;

export const CustomWebsitesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 12em;
  justify-content: center;

  label {
    font-size: 1.5rem;
    color: #333;
    span {
      /* color: #f5a623; */
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: #333;
      }
    }
  }

  h3 {
    color: #333;
    font-size: 1.2rem;
    text-align: center;
  }
`;

