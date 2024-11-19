import styled from "styled-components";

export const ProductsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #ececec;

  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: 600;
    margin: 0;
    padding-left:20px;
  }
`;