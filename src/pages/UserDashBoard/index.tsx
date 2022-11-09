import { useContext, useEffect } from "react";
import { ServiceContext } from "../../contexts/ServicesContext";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/img/logoPet.png";
import { NavBar } from "../../components/NavBar";
import { StyledHeader } from "../../components/Header/style";
import { StyledButtonExit } from "../../components/Icons";
import Link from "../../components/Links";
import { StyledDivUserDashBoard } from "./style";
import { StyledDiv } from "../../components/Divs/style";
import ModalInfo from "../../components/Modal/ModalInfo";

export const UserDashBoard = () => {
  const { user, size, logoutFunction } = useContext(UserContext);
  const {
    newNavBar,
    setDataValueInput,
    setSearchBtn,
    newServicesListBtn,
    newServiceListInput,
    dataValueInput,
    setRenderList,
    searchBtn,
    renderList,
    setServiceClick,
    openModal,
  } = useContext(ServiceContext);

  useEffect(() => {
    if (dataValueInput === "") {
      setRenderList(newServicesListBtn);
    } else {
      setRenderList(newServiceListInput);
    }
  }, [dataValueInput || searchBtn]);

  return (
    <StyledDivUserDashBoard>
      <StyledHeader>
        <button onClick={() => logoutFunction()}>
          <StyledButtonExit />
        </button>
        <div className="headerLogo">
          {size < 720 ? <></> : <img src={logo} alt="Logo" />}
          <h2>NetPet</h2>

          <div className="headerDiv">
            <img src="" alt="Avatar" />

            <Link to="/userProfile">Profile</Link>
          </div>
        </div>
      </StyledHeader>

      <NavBar
        setSearchBtn={setSearchBtn}
        newNavBar={newNavBar}
        setDataValueInput={setDataValueInput}
      />

      <main>
        <ul>
          {renderList.map((element, index) => (
            <li key={index} onClick={() => setServiceClick(element)}>
              <div className="serviceCard">
                <img src={element.logo} alt="logo"></img>
                <h2>{element.servicename}</h2>
                <p>{element.typeofservice}</p>
                <p>{element.phone}</p>
                <button onClick={openModal}>Open Modal</button>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <ModalInfo />
    </StyledDivUserDashBoard>
  );
};
