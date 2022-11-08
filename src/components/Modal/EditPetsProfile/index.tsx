import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import Modal from "react-modal";
import { petsContext } from "../../../contexts/PetsContext";

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
  const { editPets, petsInfo, deletePet, petsList } = useContext(petsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditFormPet>({
    defaultValues: {
      name: petsInfo?.name,
      type: petsInfo?.type,
      race: petsInfo?.race,
      picture: petsInfo?.picture,
    },
  });

  const submitEditPet: SubmitHandler<iEditFormPet> = (data) => {
    editPets(data);
  };
  return (
    <Modal isOpen={modalEditPetOpen} onRequestClose={closeModalEditPet}>
      <form onSubmit={handleSubmit(submitEditPet)}>
        <button onClick={() => closeModalEditPet()}>Fechar</button>

        <input type="name" placeholder={"Nome"} {...register("name")} />
        <input type="type" placeholder={"Tipo"} {...register("type")} />
        <input type="picture" placeholder={"Foto"} {...register("picture")} />
        <input type="race" placeholder={"Raça"} {...register("race")} />
        <button type="submit">Editar Pet</button>
        <button onClick={deletePet}> Deletar </button>
      </form>
    </Modal>
  );
};
