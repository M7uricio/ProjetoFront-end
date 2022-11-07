import { useContext, useEffect } from "react";
import { ServiceContext } from "../../contexts/ServicesContext";
// import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/img/logoPet.png";
import { NavBar } from "../../components/NavBar";
import { Main } from "../../components/Main";
import { StyledDiv } from "../../styles/Divs/style";
import { StyledHeader } from "../../components/Header/style";
import { ButtonExit } from "../../styles/buttonsIcons";
import { RenderContext } from "../../contexts/RenderContext";
import ModalInfo from "../../components/ModalInfo";

export const UserDashBoard = () => {
  // const { user } = useContext(UserContext);
  const {
    newNavBar,
    setDataValueInput,
    setSearchBtn,
    newServicesListBtn,
    newServiceListInput,
    dataValueInput,
    setRenderList,
    searchBtn,
  } = useContext(ServiceContext);
  const { size } = useContext(RenderContext);

  useEffect(() => {
    if (dataValueInput === "") {
      setRenderList(newServicesListBtn);
    } else {
      setRenderList(newServiceListInput);
    }
  }, [dataValueInput || searchBtn]);

  return (
    <>
      <StyledHeader>
        <button>
          <ButtonExit />
        </button>
        <StyledDiv variant="headerLogo">
          {size < 720 ? <></> : <img src={logo} alt="Logo" />}
          <h2>NetPet</h2>

          <StyledDiv variant="headerDiv">
            <img src="" alt="Avatar" />

            <button>Profile</button>
          </StyledDiv>
        </StyledDiv>
      </StyledHeader>

      <NavBar
        setSearchBtn={setSearchBtn}
        newNavBar={newNavBar}
        setDataValueInput={setDataValueInput}
      />

      <Main />

      <ModalInfo />
    </>
  );
};
