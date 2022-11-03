import { ButtonSeach } from "../../styles/buttonsIcons";
import { Input } from "../../styles/input";
import { DivSeach } from "./style";

import "./style.ts";

const Research = () => (
  <DivSeach>
    <Input
      className="inputSeach"
      variant="inputPrimary"
      height="40px"
      width="350px"
      placeholder="Digite aqui ..."
    />
    <ButtonSeach className="buttonSeach" />
  </DivSeach>
);

export default Research;
