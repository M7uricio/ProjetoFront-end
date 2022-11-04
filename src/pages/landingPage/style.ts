import styled from "styled-components";

export const DivLandingPage = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--brand-1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  .navLandinPage {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .writeLogo {
    display: flex;
  }

  img {
    width: 300px;
  }

  .registerServices {
    display: flex;
    gap: 5px;
  }
`;
