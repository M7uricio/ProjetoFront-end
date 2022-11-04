import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
interface iDataCategory {
  cnpj: string;
  description: string;
  id: number;
  images: string[];
  logo: string;
  phone: string;
  servicename: string;
  typeofservice: string;
  userId: number;
}
export const ServiceMenu = () => {
  const [servicesSearchBar, setServicesSearchBar] = useState<iDataCategory[]>(
    []
  );
  const [dataValueInput, setDataValueInput] = useState("");
  const [searchResults, setSearchResults] = useState<iDataCategory[]>([]);
  const [serviceClick, setServiceClick] = useState<iDataCategory[]>([]);
  const filtredItems = servicesSearchBar.filter((element) => {
    const value = element.servicename
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(dataValueInput.toLowerCase());

    const valueTypeOfService = element.typeofservice
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(dataValueInput.toLowerCase());

    const valueDescription = element.description
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(dataValueInput.toLowerCase());
    return value || valueTypeOfService || valueDescription;
  });

  useEffect(() => {
    try {
      axios
        .get(`https://pets-json-server-m3.herokuapp.com/services`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => setServicesSearchBar(res.data));
    } catch (error) {}
  }, []);
  // console.log(serviceClick);
  // console.log(searchResults);
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

      {servicesSearchBar.map((element, index) => {
        return (
          <button
            key={index}
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
        );
      })}

      <br />
      <br />

      {filtredItems.length < 0
        ? servicesSearchBar.map((element, index) => {
            return <link key={index}>{element.servicename}</link>;
          })
        : filtredItems.map((element, index) => {
            return (
              <button onClick={() => setServiceClick([element])} key={index}>
                {element.servicename}
              </button>
            );
          })}
    </main>
  );
};

// onClick={() => setServiceClick(element)}
