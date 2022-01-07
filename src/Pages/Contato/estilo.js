import styled from "styled-components";

export const ContatoArea = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .photo-side {
    width: 500px;
    img {
      width: inherit;
      box-shadow: 5px 10px 100px #a8a5a4;
      margin: 25px 0px;
    }
    .icons {
      display: flex;
      color: #0b0a0b;
      margin: 15px 0px;
      h3 {
        margin-left: 10px;
      }
    }
  }
  .form-side {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    form {
      display: flex;
      flex-direction: column;
      width: 70%;
      input,
      textarea {
        font-size: 15px;
        background-color: transparent;
        margin-bottom: 20px;
        padding: 20px 0px;
        outline: 0;
        font-family: "Lato", sans-serif;
        border: none;
        font-weight: bold;
        border-bottom: 2px solid #ccc;
        ::placeholder {
          color: #0b0a0b;
        }
      }
      textarea {
        height: 120px;
        resize: none;
      }
      button {
        cursor: pointer;
        margin-top: 15px;
        padding: 15px;
      }
    }
  }
`;
