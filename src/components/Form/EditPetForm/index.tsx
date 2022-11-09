import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { petsContext } from "../../../contexts/PetsContext";
import { editPetSchema } from "../../../validations/editPetSchema";
import { iEditFormPet } from "../../Modal/EditPetsProfile";

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
    <>
      <form onSubmit={handleSubmit(submitEditPet)}>
        <button onClick={() => closeModalEditPet()}>Fechar</button>
        <label htmlFor="">Nome</label>
        <input type="name" placeholder={"Nome"} {...register("name")} />
        {errors.name?.message}
        <label htmlFor="">Tipo</label>
        <input type="type" placeholder={"Tipo"} {...register("type")} />
        {errors.type?.message}
        <label htmlFor="">Foto</label>
        <input type="picture" placeholder={"Foto"} {...register("picture")} />
        {errors.picture?.message}
        <label htmlFor="">Raça</label>
        <input type="race" placeholder={"Raça"} {...register("race")} />
        {errors.race?.message}
        <button type="submit">Editar Pet</button>
        <button onClick={deletePet}> Deletar </button>
      </form>
    </>
  );
};
