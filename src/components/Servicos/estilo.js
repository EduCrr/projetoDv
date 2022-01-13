import styled from "styled-components";

export const ServicosArea = styled.section`
  max-width: 1200px;
  margin: 4rem auto;

  .servicos {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .left-side {
      max-width: 450px;
    }
    .right-side {
      max-width: 500px;
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 0px 20px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    .servicos {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .right-side {
        margin: 20px auto;
      }
    }
  }
  @media screen and (max-width: 560px) {
    .right-side {
      margin: 0px !important;
    }
  }
`;

export const ListaServicos = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.change ? "row" : "row-reverse")};
  .text {
    width: 250px;
    display: flex;
    align-items: flex-end;
    h3 {
      padding: 20px !important;
    }
  }
  .photo {
    width: 250px;
    img {
      box-shadow: 5px 10px 100px #a8a5a4;
      height: 250px;
      width: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
    margin: auto;
    .text {
      h3 {
        padding: 20px 0px !important;
        margin: auto;
      }
    }
  }
`;
