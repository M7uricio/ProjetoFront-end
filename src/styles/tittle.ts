import styled, {css} from "styled-components";

interface iTitleProps{
    variant: string
}

export const Title = styled.h2<iTitleProps>`

    ${({variant}) => {

        if(variant === "testTitle"){

            return css`
                font-size: 26px;
                font-weight: 700;
                line-height: 28px;

                color: black;
            `
        } else if(variant === "testTitleBig"){

            return css`
                font-size: 38px;
                font-weight: 700;
                line-height: 28px;

                color: black;
            `
        }
    }}
`