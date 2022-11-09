padrão css

    bloco 1: display e relacionados
    bloco 2: tamanhos/margin/padding
    bloco 3: background/ borda e relacionados
    bloco 4: texto 
    bloco 5: resto

exemplo:

div{
    display: flex;
    flex-direction: row;
    juntify-content: center;
    align-itens: center;
    position: absolute;
    z-index: 1;

    height: 100px;
    max-height: 200px;
    width: 100px;
    max-width: 200px;
    padding: 2px 5px 10px 0;
    margin-top: 20px

    background-color: blue;
    border: solid 2px white;
    border-radius: 8px;
    box-shadow:;

    font-size: 16px;
    font-weigth: 600;
    font-color: black;
    text-align: center;

    transition: 0.2s;
    cursor: pointer;
}

obs: esse exemplo já cobre a maior parte das propriedades que serão utilizadas durante a aplicação, mas caso for usar alguma que não esteja contida nele pode encaixa-la no grupo que mais estiver de acordo :)