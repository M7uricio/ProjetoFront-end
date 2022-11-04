import { FormLogin } from './../Login/styled';
import styled  from "styled-components";

export const RegisterDiv = styled.div`

    display: flex;
    flex-direction: row;

    min-height: 100vh;
    min-width: 100vw;

    .imgDiv {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 45%;
        height: 100vh;

        background-color: var(--brand-1);
    }

    .imgDiv img {
        height: 600px;
    }

    .formDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        width: 55%;
        padding: 30px 10% 0;
    }

    .formDiv div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        margin-bottom: 30px;
    }

    .formDiv form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        width: 100%;
        padding: 30px 15px;

        background-color: var(--grey-5);
        border-radius: 10px;
    }

    .formDiv form label {
        margin-bottom: -10px;
        margin-left: 12px;
    }

    .formDiv svg{
        position: absolute;
        top: 30px;
        left: 20%;

        width: 25px;
        height: 25px;
        padding: 5px;

        background-color: var(--brand-1);
        color: var(--brand-2);
        border-radius: 5px;
    }

    @media (max-width: 762px){

    }
`