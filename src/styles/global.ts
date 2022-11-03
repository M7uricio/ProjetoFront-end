import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video ,input , button{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: 400;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        border: none;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    :root {
        --brand-1: ;
        --brand-2: ;
        
        --grey-opacity-1: ;
        --background-primary: #ffffff;
        --background-secondary: #e9e9f2;
        --background-trhird: #e1e1e5;
        --background-invert: #343434;

        --text-primary: #151515;
        --text-secondary: #4e4e4e;
        --text-invert: #ffffff;
        --text-link: #0069c2;

        --red: #ff0000;
    }
`;
