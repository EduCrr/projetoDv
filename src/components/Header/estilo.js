import styled from "styled-components";

export const HeaderArea = styled.header`
  max-width: 1200px;
  margin: auto;
  margin-top: 25px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      ul,
      li {
        list-style: none;
        margin: 0px 10px;
        display: flex;
        a {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 15px;
          color: #0b0a0b;
          text-decoration: none;
        }
      }
    }
  }
`;
