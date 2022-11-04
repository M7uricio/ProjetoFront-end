import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  align-items: center;
  height: 402.69px;
  justify-content: space-around;
  background: var(---color-background3);
  Label {
    justify-self: flex-start;
    width: 264px;
    font-size: 9.772px;
    color:var(---colo-white2) ;
  }
  input {
    width: 264px;
    height: 38px;
    background: var(---color-background2);
  }
  button {
    width: 259px;
    height: 38px;
    margin-top: 10px;
    background: var( ---color-pink);
    color:var(---colo-white2) ;
    border-radius: 4.06066px;
    border: 1.2182px solid var( ---color-pink);
  }
  .SingupButton {
    background: var(---color-gray2);
    margin-bottom: 33px;
    border: 1.2182px solid var(---color-gray2);
  }
  h1 {
    font-size: 14.439px;
    margin-top: 20px;
  }
  p {
    color: var(---color-gray2);
  }
  .Link{
    color:var(---colo-white2) ;
    text-decoration: none;
    width: 259px;
    height: 38px;
    margin-top: 10px;
    background: var( ---color-pink);
    color:var(---colo-white2) ;
    border-radius: 4.06066px;
    border: 1.2182px solid var( ---color-pink);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;