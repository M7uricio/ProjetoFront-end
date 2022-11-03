import styled from "styled-components";

import { AiFillHome } from "react-icons/ai";
import { BiArrowBack, BiSearchAlt } from "react-icons/bi";

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
