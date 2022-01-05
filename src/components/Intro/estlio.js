import styled from "styled-components";

export const IntroArea = styled.section`
  height: 100vh;
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
      justify-content: end;
      align-items: flex-end;
      img.center {
        margin-right: 250px;
      }
    }
    img,
    img.center {
      box-shadow: 5px 10px 100px #a8a5a4;
      width: 250px;
      height: 200px;
      object-fit: cover;
    }
  }
`;
