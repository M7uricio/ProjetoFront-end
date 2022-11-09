import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { petsContext } from "../../../contexts/PetsContext";
import { editPetSchema } from "../../../validations/editPetSchema";
import { iEditFormPet } from "../../Modal/EditPetsProfile";
import { Input } from "../../Inputs/style";
import Button from "../../Button";

import ModalEditPetsStyle from "./style";
export const FormEditPet = () => {
  const { closeModalEditPet } = useContext(ModalContext);
  const { editPets, petsInfo, deletePet } = useContext(petsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditFormPet>({
    resolver: yupResolver(editPetSchema),
    defaultValues: {
      name: petsInfo?.name,
      type: petsInfo?.type,
      race: petsInfo?.race,
      picture: petsInfo?.picture,
    },
  });

  const submitEditPet = (data: iEditFormPet) => {
    editPets(data);
    closeModalEditPet();
  };

  return (
    <ModalEditPetsStyle>
      <header>
        <h3>Editar Pet</h3>
        <span>Frase de efeito sobre pets</span>
      </header>
      <form onSubmit={handleSubmit(submitEditPet)}>
        <button
          className="btnCloseModalEditPet"
          onClick={() => closeModalEditPet()}
        >
          X
        </button>
        <label htmlFor="">Nome</label>
        <Input
          variant="inputPrimary"
          height="60px"
          width="100%"
          type="name"
          placeholder={"Nome"}
          {...register("name")}
        ></Input>
        {errors.name?.message}
        <label htmlFor="">Tipo</label>
        <Input
          variant="inputPrimary"
          height="60px"
          width="100%"
          type="type"
          placeholder={"Tipo"}
          {...register("type")}
        ></Input>
        {errors.type?.message}
        <label htmlFor="">Foto</label>
        <Input
          variant="inputPrimary"
          height="60px"
          width="100%"
          type="picture"
          placeholder={"Foto"}
          {...register("picture")}
        ></Input>
        {errors.picture?.message}
        <label htmlFor="">Raça</label>
        <Input
          variant="inputPrimary"
          height="60px"
          width="100%"
          type="race"
          placeholder={"Raça"}
          {...register("race")}
        ></Input>

        {errors.race?.message}
        <Button type="submit">Editar Pet</Button>
      </form>
      <Button onClick={() => deletePet()}>Remover Pet</Button>
    </ModalEditPetsStyle>
  );
};
