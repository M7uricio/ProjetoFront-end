import { iDataCategory } from "../../contexts/ServicesContext";
import { StyledUl } from "../../styles/ListBody";
import { StyledLi } from "../../styles/ListItems";
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
      <StyledUl>
        <StyledLi key={0}>
          <Button onClick={() => setSearchBtn("")}>Todos</Button>
        </StyledLi>
        {newNavBar().map((element, index) => (
          <StyledLi key={index + 1}>
            <Button onClick={() => setSearchBtn(element.typeofservice)}>
              {element.typeofservice}
            </Button>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  );
};
