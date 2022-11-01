import styled, {css} from "styled-components";

interface iTextProps{
    variant: string
}

export const Text = styled.p<iTextProps>`

    ${({variant}) => {

        if(variant === "testText"){

            return css`
                font-size: 18px;
                font-weight: 700;
                line-height: 28px;

                color: black;
            `
        } else if(variant === "testTextBig"){

            return css`
                font-size: 26px;
                font-weight: 700;
                line-height: 28px;

                color: black;
            `
        }
    }}
`