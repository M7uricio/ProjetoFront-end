import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100vw;
  max-width: 500px;
  gap: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1px;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 159px;
  }
  button {
    text-align: center;
    width: 100%;
    height: 75px;
  }
  @media (min-width: 720px) {
  }
`;
