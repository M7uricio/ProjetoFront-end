import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import Modal from "react-modal";
import React from "react";
import ReactDOM from "react-dom";
import { FormEditProfile } from "../../Form/EditUserForm";

export interface ieditForm {
  id: number;
  name: string;
  type: string;
  password: string;
  email: string;
  phone: string;
}

export const ModalProfile = () => {
  const { closeModalEditUser, modalEditOpen } = useContext(ModalContext);

  return (
    <>
      <Modal isOpen={modalEditOpen} onRequestClose={closeModalEditUser}>
        <FormEditProfile />
      </Modal>
    </>
  );
};
