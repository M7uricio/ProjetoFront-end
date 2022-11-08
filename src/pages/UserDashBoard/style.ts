import styled from "styled-components";

export const StyledDivUserDashBoard = styled.div`
  .headerLogo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--brand-1);
    width: 100vw;
    padding: 5px 0px;
    img {
      width: 100vw;
      max-width: 250px;
    }
    @media (min-width: 720px) {
      flex-direction: row;
      justify-content: space-around;
    }
    @media (min-width: 1024px) {
      padding-right: 100px;
    }
  }

  .headerDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    width: 100vw;
    max-width: 200px;
    height: 100vh;
    max-height: 200px;
    background-color: var(--brand-2);
    img {
      border-radius: 50%;
      width: 100vw;
      max-width: 100px;
      height: 100vh;
      max-height: 100px;
      background-color: red;
    }
    button {
      width: 100px;
      height: 45px;
      border-radius: 10px;
      background-color: var(--brand-1);
    }
  }

  main {
    width: 100vw;
    max-width: 1200px;
    ul {
      background-color: var(--brand-1);
      margin: 0 auto;
      margin-top: 10px;
      display: flex;
      padding: 5px;
      gap: 5px;
      border-radius: 10px;
      max-width: 900px;
      flex-wrap: wrap;
    }
    li {
      background-color: var(--brand-2);
      border-radius: 20px;
    }
    .serviceCard {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 10px;
      width: 100vw;
      max-width: 150px;
      height: 100vh;
      max-height: 200px;
      h2 {
        color: var(--white);
        font-weight: 700;
        font-size: 18px;
      }
      p {
        color: var(--black);
        font-weight: 700;
      }
    }
  }
`;
