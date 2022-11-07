import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface iDivProps {
  variant: string;
}

interface iDivVariants {
  DivPrimary: FlattenSimpleInterpolation;
  [key: string]: any;
}
const divVariants: iDivVariants = {
  DivPrimary: css`
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    background-color: var(--brand-1);

    @media (min-width: 720px) {
      flex-direction: row;
    }
  `,

  DivSecondary: css`
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
  `,

  DivTertiary: css`
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
  `,

  DivInnerForm: css`
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    h2 {
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      text-align: center;
    }
    p {
      text-align: center;
      margin-bottom: 1rem;
      align-self: auto;
    }
  `,
  PasswordDiv: css`
    position: relative;
    width: 100%;
  `,
  headerLogo: css`
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
  `,
  headerDiv: css`
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
  `,
  searchBox: css`
    position: relative;
    display: flex;
    align-items: center;
    max-width: 500px;
    svg {
      position: absolute;
      right: 5px;
    }
  `,
  serviceCard: css`
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
  `,
};

export const StyledDiv = styled.div<iDivProps>`
  display: flex;
  ${({ variant }) => {
    return divVariants[variant || "DivPrimary"];
  }}
`;
