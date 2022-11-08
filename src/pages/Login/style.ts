import styled from "styled-components";

export const StyledRegisterMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--brand-1);

  @media (min-width: 720px) {
    flex-direction: row;
  }

  .DivSecondary {
    max-width: 300px;
    width: 100vw;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    img {
      width: 75%;
    }
    @media (min-width: 720px) {
      display: flex;
      max-width: 50%;
      width: 100vw;
      margin: 0 auto;
    }
  }

  .DivTertiary {
    max-width: 500px;
    width: 100vw;
    margin: 0 auto;
    padding: 0px 10px;
    border-radius: 10px;

    @media (min-width: 720px) {
      display: flex;
      max-width: 50%;
      min-width: 300px;
      width: 100vw;
      background-color: white;
      justify-content: center;
      padding-top: 25px;
      margin: 0 auto;
    }
  }
`;
