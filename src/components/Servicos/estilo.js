import styled from "styled-components";

export const ServicosArea = styled.section`
  max-width: 1200px;
  margin: 4rem auto;

  .servicos {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .left-side {
      width: 450px;
    }
    .right-side {
      width: 500px;
      display: flex;
      flex-direction: column;
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
      height: 250px;
      width: 100%;
      object-fit: cover;
    }
  }
`;
