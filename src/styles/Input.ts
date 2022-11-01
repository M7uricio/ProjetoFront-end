import styled, {css} from "styled-components";

interface iInputProps{
    variant: string
}

export const Input = styled.input<iInputProps>`

    ${({variant}) => {

        if(variant === "testInput"){

            return css`
                height: 20px;

                background-color: black;
            `
        }
    }}
`