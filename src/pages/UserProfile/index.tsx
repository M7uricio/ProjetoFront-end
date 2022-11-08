import userEvent from "@testing-library/user-event";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { ModalContext } from "../../contexts/ModalContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { petsContext } from "../../contexts/PetsContext";
import { ModalProfile } from "../../components/Modal/EditProfileUser";
import { ModalAddPets } from "../../components/Modal/AddPets";
import { ModalEditPets } from "../../components/Modal/EditPetsProfile";

interface ieditFormPet {
  id?: number;
  userId?: number;
  name?: string;
  type?: string;
  picture?: string;
  race?: string;
}

const Profile = () => {
  const { user } = useContext(UserContext);

  const { openModaladdpet, openModalEditUser, openModalEditPet } =
    useContext(ModalContext);
  const { petsList } = useContext(petsContext);

  return (
    <>
      <div>
        <div>
          {/* <link>HOME TESTE</link> */}
          <img src="Logo Pet 5.png" alt="" />
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <p>{user?.name}</p>
            <button onClick={() => openModalEditUser()}>Editar Perfil</button>
            <ModalProfile></ModalProfile>
            <button onClick={() => openModaladdpet()}>Adicionar Pet</button>
            <ModalAddPets></ModalAddPets>
          </div>
        </div>
        <div>
          <ul>
            {petsList.length > 0 &&
              petsList.map((element: ieditFormPet, index) => (
                <li key={index}>
                  <img src={element.picture} alt="" />
                  <p>{element.name}</p>
                  <button onClick={() => openModalEditPet(element)}>
                    Editar Pet
                  </button>
                  <ModalEditPets></ModalEditPets>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
