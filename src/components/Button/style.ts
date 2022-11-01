import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface iButtonProps{
    variant?: string,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    children: React.ReactNode,
    classname?: string
  }

interface iButtonVariants{
    testButton: FlattenSimpleInterpolation,
    [key: string]: any
}

const buttonVariants: iButtonVariants = {
    testButton: css`
        height: 48px;
        padding: 0 22px;
        border-radius: 4px;

        background-color: red;

        font-size: 16px;
        line-height: 26px;
        font-weight: 500;

        cursor: pointer;
        transition: .2s;

        @media (min-width: 762px){
            :hover {
            filter: brightness(0.7);
            }
        }
    `,
}

export const Container = styled.button<iButtonProps>`

    ${({variant}) => {return buttonVariants[variant || "testButton"]}}
`