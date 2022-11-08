import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {ModalContext} from "../../../contexts/ModalContext";
import { petsContext } from "../../../contexts/PetsContext";
import Modal from "react-modal";
import { UserContext } from "../../../contexts/UserContext";

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
  } = useForm<iaddFormPet>({});

  const submit: SubmitHandler<iaddFormPet> = (data) => {
    addPet(data);
    closeModaladdpet()
  };

  return(
    <>
    <Modal isOpen={modalIsOpen} onRequestClose={closeModaladdpet}>
    <form onSubmit={handleSubmit(submit)}>
      <button onClick={() => closeModaladdpet()}>Fechar</button>
      <input
        type="UserId"
        placeholder="UserId"
        value={user?.id}
        {...register("userId")}
      />
      <input type="name" placeholder="Nome" {...register("name")} />
      <input type="type" placeholder="Tipo" {...register("type")} />
      <input type="picture" placeholder="Foto" {...register("picture")} />
      <input type="race" placeholder="Raça" {...register("race")} />
      <button type="submit">Criar novo pet</button>
    </form>
  </Modal>
    </>
    
  )
};
