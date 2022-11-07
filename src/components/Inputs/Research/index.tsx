import { ButtonSeach } from "../../../styles/buttonsIcons";
import { StyledDiv } from "../../../styles/Divs/style";
import { Input } from "../../../styles/Input";
interface iResearch {
  setDataValueInput: React.Dispatch<React.SetStateAction<string>>;
}

export const Research = ({ setDataValueInput }: iResearch) => (
  <StyledDiv variant="searchBox">
    <Input
      className="inputSeach"
      variant="inputPrimary"
      height="40px"
      width="100vw"
      placeholder="Digite aqui ..."
      onChange={(event) => setDataValueInput(event.target.value)}
    />
    <ButtonSeach className="buttonSeach" />
  </StyledDiv>
);
