import styled, { css } from "styled-components";

interface iTextProps {
  variant: string;
}

export const Text = styled.p<iTextProps>`
  ${({ variant }) => {
    if (variant === "title1") {
      return css`
        font-weight: 700;
        font-size: 26px;

        color: black;
      `;
    } else if (variant === "title2") {
      return css`
        font-weight: 700;
        font-size: 22px;
      `;
    } else if (variant === "title3") {
      return css`
        font-weight: 700;
        font-size: 18px;
      `;
    }
  }}
`;
