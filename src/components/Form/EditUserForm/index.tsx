import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import { EditUserSchema } from "../../../validations/editProfileSchema";
import { ieditForm } from "../../Modal/EditProfileUser";

export const FormEditProfile = () => {
  const { user, userEditProfile } = useContext(UserContext);
  const { closeModalEditUser } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ieditForm>({
    resolver: yupResolver(EditUserSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
    },
  });
  const submit: SubmitHandler<ieditForm> = (data) => {
    userEditProfile(data);
    closeModalEditUser();
  };
  return (
    <>
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
        <p>{errors.password?.message}</p>

        <button type="submit">Editar Perfil</button>
      </form>
    </>
  );
};
