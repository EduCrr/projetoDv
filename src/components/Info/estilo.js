import styled from "styled-components";

export const InfoArea = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 35px;
  }
  .first-note,
  .second-note {
    background-color: #d6d1ce;
    width: 450px;
    padding: 20px;
    box-shadow: 5px 10px 100px #a8a5a4;

    img {
      margin-bottom: 30px;
      padding: 0;
      width: 100%;
      object-fit: cover;
      height: 250px;
    }
  }
  .second-note {
    margin-top: 6rem;
  }
`;
