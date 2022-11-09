import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import Modal from "react-modal";
import { petsContext } from "../../../contexts/PetsContext";
import { editPetSchema } from "../../../validations/editPetSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormEditPet } from "../../Form/EditPetForm";

export interface iEditFormPet {
  id?: number;
  userId?: number;
  name?: string;
  type?: string;
  picture?: string;
  race?: string;
}

export const ModalEditPets = () => {
  const { closeModalEditPet, modalEditPetOpen } = useContext(ModalContext);

  return (
    <Modal isOpen={modalEditPetOpen} onRequestClose={closeModalEditPet}>
      <FormEditPet />
    </Modal>
  );
};
