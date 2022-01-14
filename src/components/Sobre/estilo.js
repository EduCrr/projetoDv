import styled from "styled-components";

export const SobreArea = styled.section`
  max-width: 1200px;
  margin: 3rem auto 5rem auto;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-side {
      max-width: 450px;
      img {
        width: inherit;
        box-shadow: 5px 10px 100px #a8a5a4;
        height: 550px;
        object-fit: cover;
      }
    }
    .right-side {
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .infos-area {
        margin-top: 10px;
        width: inherit;
        display: flex;
        align-items: center;
        .info {
          width: 100%;
          background-color: #d6d1ce;
          color: #0b0a0b;
          text-align: center;
          padding: 20px;
          &:nth-child(2) {
            border-left: 10px solid #dad4d2;
          }
          &:nth-child(3) {
            border-left: 10px solid #dad4d2;
          }
          h5 {
            margin: 15px auto;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 0px 20px;
    .container {
      flex-direction: column;
      text-align: center;

      .right-side {
        width: 100%;
        margin: 15px auto;
        h1 {
          margin: auto;
        }
      }
    }
  }
  @media screen and (max-width: 560px) {
    .infos-area {
      flex-direction: column;
      margin: auto;
      width: 30% !important;
      .info {
        border-left: 0px !important;
        border-bottom: 10px solid #dad4d2;
      }
    }
  }
`;
