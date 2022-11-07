import React, { useContext } from "react";

import { ServiceContext } from "../../contexts/ServicesContext";
import { ServiceMenuPage } from "./styled";
import logo from "../../assets/img/logoPet.png";
export const ServiceMenu = () => {
  const {
    dataValueInput,
    setDataValueInput,
    servicesSearchBar,
    searchResults,
    setSearchResults,
    serviceClick,
    setServiceClick,
    filtredItems,
  } = useContext(ServiceContext);
  console.log(serviceClick);
  console.log(searchResults);
  return (
    <ServiceMenuPage>
      <header>
        <div>
          <button>☺</button>
          <img
            className="imgRoundShape"
            src={logo}
            alt="logo formato de coração com cachorro e gato"
          />
          <img className="imgRoundShape" alt="" />
        </div>

        <div>
          <input
            type="text"
            onChange={(event) => {
              setDataValueInput(event.target.value);
            }}
          />
        </div>
      </header>

      <ul>
        {servicesSearchBar.map((element) => {
          return (
            <li key={element.id}>
              <button
                onClick={() => {
                  setSearchResults(
                    servicesSearchBar.filter(
                      (elementCategory) =>
                        elementCategory.typeofservice === element.typeofservice
                    )
                  );
                }}
              >
                {element.typeofservice}
              </button>
            </li>
          );
        })}
      </ul>

      <br />
      <br />
      <ul>
        {filtredItems.length < 0
          ? servicesSearchBar.map((element) => {
              return (
                <li key={element.id}>
                  <button>{element.servicename}</button>
                </li>
              );
            })
          : filtredItems.map((element) => {
              return (
                <li key={element.id}>
                  <span>Serviço:</span>
                  <button onClick={() => setServiceClick([element])}>
                    {element.servicename}
                  </button>
                </li>
              );
            })}
      </ul>
    </ServiceMenuPage>
  );
};
