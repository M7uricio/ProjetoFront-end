import styled, { css } from "styled-components";

import { AiFillHome } from "react-icons/ai";
import { BiArrowBack, BiSearchAlt } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";

interface iIconsProps {
  variant: string;
  font: string;
}
export const StyledPaw = styled(FaPaw)<iIconsProps>`
  ${({ variant, font }) => {
    switch (variant) {
      case "paw":
        return css`
          color: ${font};
        `;
    }
  }}
`;

export const ButtonHome = styled(AiFillHome)`
  padding: 10px;
  font-size: 35px;
  color: var(--brand-2);
  background-color: var(--brand-1);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    padding: 11px;
    font-size: 36px;
  }
`;

export const ButtonExit = styled(BiArrowBack)`
  padding: 10px;
  font-size: 35px;
  color: var(--brand-2);
  background-color: var(--brand-1);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    padding: 11px;
    font-size: 36px;
  }
`;

export const ButtonSeach = styled(BiSearchAlt)`
  font-size: 35px;
  color: var(--brand-2);
  cursor: pointer;

  &:hover {
    font-size: 36px;
  }
`;
export const StyledEye = styled(AiFillEye)`
  position: absolute;
  margin: 13px;
  left: 88%;
`;

export const StyledClosedEye = styled(AiFillEyeInvisible)`
  position: absolute;
  margin: 13px;
  left: 88%;
`;
