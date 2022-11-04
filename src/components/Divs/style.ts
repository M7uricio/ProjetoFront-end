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
    max-width: 300px;
    width: 100vw;
    margin: 0 auto;
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
};

export const StyledDiv = styled.div<iDivProps>`
  display: flex;
  ${({ variant }) => {
    return divVariants[variant || "DivPrimary"];
  }}
`;
