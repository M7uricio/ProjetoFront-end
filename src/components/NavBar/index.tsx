import { iDataCategory } from "../../contexts/ServicesContext";
import Button from "../Button";
import { Research } from "../Inputs/Research";
import { StyledNav } from "./style";

interface iNavBar {
  setSearchBtn: React.Dispatch<React.SetStateAction<string>>;
  setDataValueInput: React.Dispatch<React.SetStateAction<string>>;
  newNavBar: () => iDataCategory[];
}
export const NavBar = ({
  setSearchBtn,
  newNavBar,
  setDataValueInput,
}: iNavBar) => {
  return (
    <StyledNav>
      <Research setDataValueInput={setDataValueInput} />
      <ul>
        <li key={0}>
          <Button onClick={() => setSearchBtn("")}>Todos</Button>
        </li>
        {newNavBar().map((element, index) => (
          <li key={index + 1}>
            <Button onClick={() => setSearchBtn(element.typeofservice)}>
              {element.typeofservice}
            </Button>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};
