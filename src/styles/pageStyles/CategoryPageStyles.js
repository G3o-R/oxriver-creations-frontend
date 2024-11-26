import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  /* padding-bottom: 10px; */
  border-bottom: 2px solid #ececec;
  box-shadow: inset 0px -25px 30px -10px rgb(17,17,17, 1);

  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: 600;
    margin: 0;
    padding: 5px 20px;

  }
`;