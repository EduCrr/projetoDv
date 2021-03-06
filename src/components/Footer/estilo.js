import styled from "styled-components";

export const FooterArea = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0b0a0b;
  .left-side {
    font-size: 20px;
    font-weight: bold;
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
  @media screen and (max-width: 1024px) {
    padding: 0px 20px;
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
    .left-side {
      text-align: center;
    }
    .right-side {
      margin-top: 20px !important;
    }
  }
`;
