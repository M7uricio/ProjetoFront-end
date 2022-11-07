import { useContext } from "react";
import { ServiceContext } from "../../../contexts/ServicesContext";
import { StyledDiv } from "../../../styles/Divs/style";
import { StyledUl } from "../../../styles/ListBody";
import { StyledLi } from "../../../styles/ListItems";

export const ServiceList = () => {
  const { renderList, setServiceClick } = useContext(ServiceContext);
  return (
    <StyledUl>
      {renderList.map((element, index) => (
        <StyledLi key={index} onClick={() => setServiceClick([element])}>
          <StyledDiv variant="serviceCard">
            <img src={element.logo} alt="logo"></img>
            <h2>{element.servicename}</h2>
            <p>{element.typeofservice}</p>
            <p>{element.phone}</p>
          </StyledDiv>
        </StyledLi>
      ))}
    </StyledUl>
  );
};
