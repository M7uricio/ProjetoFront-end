import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { petsContext } from "../../../contexts/PetsContext";
import Modal from "react-modal";
import { UserContext } from "../../../contexts/UserContext";
import { addPetSchema } from "../../../validations/createPetSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface iaddFormPet {
  id: number;
  userId: number;
  name: string;
  type: string;
  picture: string;
  race: string;
}

export const ModalAddPets = () => {
  const { modalIsOpen } = useContext(ModalContext);
  const { closeModaladdpet } = useContext(ModalContext);
  const { addPet } = useContext(petsContext);
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iaddFormPet>({
    resolver: yupResolver(addPetSchema),
  });

  const submit = (data: iaddFormPet) => {
    const newData = { ...data, userId: user?.id };
    addPet(newData);
    closeModaladdpet();
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModaladdpet}>
        <form onSubmit={handleSubmit(submit)}>
          <button onClick={() => closeModaladdpet()}>Fechar</button>
          <input type="name" placeholder="Nome" {...register("name")} />
          {errors.name?.message}
          <input type="type" placeholder="Tipo" {...register("type")} />
          {errors.name?.message}
          <input type="picture" placeholder="Foto" {...register("picture")} />
          {errors.name?.message}
          <input type="race" placeholder="Raça" {...register("race")} />
          {errors.name?.message}
          <button type="submit">Criar novo pet</button>
        </form>
      </Modal>
    </>
  );
};
