import { Link } from "react-router-dom";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface iLinkProps {
  variant?: string;
  children: React.ReactNode;
}

interface iLinkVariants {
  LinkPrimary: FlattenSimpleInterpolation;
  LinkSecondary: FlattenSimpleInterpolation;
  LinkTertiary: FlattenSimpleInterpolation;
  LinkWrite: FlattenSimpleInterpolation;
  [key: string]: any;
}

const linkVariants: iLinkVariants = {
  LinkPrimary: css`
    height: 60px;
    padding: 10px 35px;
    font-size: 1rem;
    font-weight: 700;

    color: var(--white);
    background-color: var(--brand-2);

    border: none;
    border-radius: 27px;

    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover {
      background-color: var(--brand-2-clear);
    }
  `,
  LinkSecondary: css`
    height: 60px;
    padding: 10px 35px;
    font-size: 1rem;
    font-weight: 700;

    color: var(--white);
    background-color: var(--brand-2-clear);

    border: none;
    border-radius: 27px;

    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover {
      color: var(--grey-1);
      background-color: var(--grey-5);
    }
  `,
  LinkTertiary: css`
    height: 60px;
    padding: 10px 35px;
    font-size: 1rem;
    font-weight: 700;

    color: var(--grey-1);
    background-color: var(--grey-5);

    border: none;
    border-radius: 27px;

    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover {
      color: var(--white);
      background-color: var(--brand-2-clear);
    }
  `,
  LinkWrite: css`
    text-decoration: none;
    font-weight: 700;
    font-size: 22px;
    color: var(--brand-2);
  `,
};

export const Links = styled(Link)<iLinkProps>`
  ${({ variant }) => {
    return linkVariants[variant || "LinkPrimary"];
  }}
`;
