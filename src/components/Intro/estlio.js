import styled from "styled-components";

export const IntroArea = styled.section`
  height: 95vh;
  max-width: 1200px;
  margin: auto;
  .container {
    display: flex;
    height: inherit;
    width: inherit;
    align-items: center;
    justify-content: space-between;
    .left-side {
      width: 400px;
    }
    .right-side {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      @keyframes move {
        0% {
          background-position: 0 0;
        }
        50% {
          background-position: 100% 0;
        }
      }
      @-webkit-keyframes move {
        0% {
          background-position: 0 0;
        }
        50% {
          background-position: 100% 0;
        }
      }
      .mask {
        width: 600px;
        height: 650px;
        background-position: center;
        animation: move 80s infinite;
        background-image: url("/assets/intro-camera.jpg");
        background-size: cover;
        mask: url("/assets/dv.svg");
        mask-size: cover;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .container {
      overflow-x: hidden !important ;
      overflow-x: unset;
      margin-top: 6rem;
      flex-direction: column;
      .right-side,
      .left-side {
        text-align: center;
        padding: 10px;
      }
      .right-side {
        position: absolute;
        margin-top: 8rem;
        .mask {
          padding: 0px 20px;
          height: 75vh;
          width: 85vh;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    .container {
      margin-top: 10rem;
      .right-side {
        .mask {
          margin-top: 2rem;
          height: 59vh;
          width: 600px;
        }
      }
    }
  }
`;
