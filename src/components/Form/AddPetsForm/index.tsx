import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { petsContext } from "../../../contexts/PetsContext";
import { UserContext } from "../../../contexts/UserContext";
import Button from "../../Button";
import { Input } from "../../Inputs/style";
import { iaddFormPet } from "../../Modal/AddPets";
import { StyledForm } from "../style";

export const AddPetsForm = () => {
  const { addPet } = useContext(petsContext);
  const { user } = useContext(UserContext);
  const { closeModaladdpet } = useContext(ModalContext);
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
    <StyledForm onSubmit={handleSubmit(submit)}>
      <label htmlFor="name">Nome</label>
      <Input
        id="name"
        variant="inputPrimary"
        height="60px"
        width="100%"
        type="name"
        placeholder="Nome"
        {...register("name")}
      ></Input>
      <label htmlFor="type">Tipo</label>
      <Input
        id="type"
        variant="inputPrimary"
        height="60px"
        width="100%"
        type="type"
        placeholder="Tipo"
        {...register("type")}
      ></Input>
      <label htmlFor="picture">Foto</label>
      <Input
        id="picture"
        variant="inputPrimary"
        height="60px"
        width="100%"
        type="picture"
        placeholder="Foto"
        {...register("picture")}
      ></Input>
      <label htmlFor="race">Raça</label>
      <Input
        id="race"
        variant="inputPrimary"
        height="60px"
        width="100%"
        type="race"
        placeholder="Raça"
        {...register("race")}
      ></Input>
      <Button type="submit">Criar novo pet</Button>
    </StyledForm>
  );
};
