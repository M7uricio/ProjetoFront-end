import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { petsContext } from "../../../contexts/PetsContext";
import Modal from "react-modal";
import { UserContext } from "../../../contexts/UserContext";
import { Input } from "../../Inputs/style";
import Button from "../../Button";
import ModalAddPetsStyle from "./style";

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

  const submit = (data: iaddFormPet) => {
    const newData = { ...data, userId: user?.id };
    addPet(newData);
    closeModaladdpet();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModaladdpet}
      className="modalContent"
      overlayClassName="modalOverlay"
    >
      <ModalAddPetsStyle>
        <div className="contantBtnClose">
          <button onClick={() => closeModaladdpet()}>X</button>
        </div>

        <header>
          <h3>Adiocionar Pet</h3>
          <span>Edite aqui as informações do seu pet.</span>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            variant="inputPrimary"
            height="60px"
            width="100%"
            type="name"
            placeholder="Nome"
            {...register("name")}
          ></Input>
          <Input
            variant="inputPrimary"
            height="60px"
            width="100%"
            type="type"
            placeholder="Tipo"
            {...register("type")}
          ></Input>
          <Input
            variant="inputPrimary"
            height="60px"
            width="100%"
            type="picture"
            placeholder="Foto"
            {...register("picture")}
          ></Input>
          <Input
            variant="inputPrimary"
            height="60px"
            width="100%"
            type="race"
            placeholder="Raça"
            {...register("race")}
          ></Input>
          <Button type="submit">Criar novo pet</Button>
        </form>
      </ModalAddPetsStyle>
    </Modal>
  );
};
