import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import { ieditForm } from "../../Modal/EditProfileUser";
import { ModalEditProfileStyle } from "./style";
import { Input } from "../../Inputs/style";
import Button from "../../Button";

export const FormEditProfile = () => {
  const { user, userEditProfile } = useContext(UserContext);
  const { closeModalEditUser } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ieditForm>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      password: user?.password,
    },
  });

  const submit: SubmitHandler<ieditForm> = (data) => {
    userEditProfile(data);
    closeModalEditUser();
  };
  return (
    <ModalEditProfileStyle>
      <div className="contantBtnClose">
        <button onClick={() => closeModalEditUser()}>X</button>
      </div>
      <header>
        <h3>Editar Perfil</h3>
        <span>Atualize suas informações.</span>
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
          type="email"
          placeholder="Email"
          {...register("email")}
        ></Input>
        <Input
          variant="inputPrimary"
          height="60px"
          width="100%"
          type="phone"
          placeholder="Telefone"
          {...register("phone")}
        ></Input>
        {/* <input type="name" placeholder="Nome" {...register("name")} /> */}
        {/* <input type="email" placeholder="Email" {...register("email")} /> */}
        {/* <input type="phone" placeholder="Telefone" {...register("phone")} /> */}
        {/* <input
          type="password"
          placeholder="password"
          {...register("password")}
        /> */}
        <Input
          variant="inputPrimary"
          height="60px"
          width="100%"
          type="password"
          placeholder="password"
          {...register("password")}
        ></Input>

        <Button type="submit">Editar Perfil</Button>
      </form>
    </ModalEditProfileStyle>
  );
};
