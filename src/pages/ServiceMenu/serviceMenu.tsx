import React, { useContext } from "react";

import { ServiceContext } from "../../contexts/ServicesContext";
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
    <main>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setDataValueInput(event.target.value);
          }}
        />
      </div>
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
    </main>
  );
};
