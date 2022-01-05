import styled from "styled-components";

export const SobreArea = styled.section`
  max-width: 1200px;
  margin: 4rem auto;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-side {
      width: 450px;
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
`;
