import styled from "styled-components";

export const HeaderArea = styled.header`
  max-width: 1200px;
  margin: auto;
  margin-top: 25px;
  .container {
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contato {
    a {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 0px 20px !important;
  }
  @media screen and (max-width: 380px) {
    .container {
      flex-direction: column;
    }
    .contato {
      margin-top: 40px;
    }
  }
`;
