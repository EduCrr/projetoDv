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
      .mask {
        width: 75%;
        height: 100vh;
        background-position: center;
        animation: move 80s infinite;
        background-image: url("https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
        background-size: cover;
        mask: url("/assets/dv.svg");
        mask-size: cover;
      }
    }
  }
`;
