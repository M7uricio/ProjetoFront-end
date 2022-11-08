import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import Modal from "react-modal";
import React from "react";
import ReactDOM from "react-dom";

export interface ieditForm {
  id: number;
  name: string;
  type: string;
  password: string;
  email: string;
  phone: string;
}

export const ModalProfile = () => {
  const { user, userEditProfile } = useContext(UserContext);
  const { closeModalEditUser, modalEditOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ieditForm>({
    // defaultValues: {
    //   name: user?.name,
    //   email: user?.email,""
    //   phone: user?.phone,
    //   password: user?.password,
    // },
  });

  const submit: SubmitHandler<ieditForm> = (data) => {
    userEditProfile(data);
    closeModalEditUser()
  };
console.log(user)
  return (
    <>
      <Modal isOpen={modalEditOpen} onRequestClose={closeModalEditUser}>
        <form onSubmit={handleSubmit(submit)}>
          <button onClick={() => closeModalEditUser()}>Fechar</button>

          <input type="name" placeholder="Nome" {...register("name")} />
          <input type="email" placeholder="Email" {...register("email")} />
          <input type="phone" placeholder="Telefone" {...register("phone")} />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />

          <button type="submit">Editar Perfil</button>
        </form>
      </Modal>
    </>
  );
};
