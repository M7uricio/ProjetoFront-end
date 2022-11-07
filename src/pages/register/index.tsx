import { registerSchema } from "../../validations/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import LogoReg from "../../assets/img/Ramister 1.svg";
import { UserContext } from "../../contexts/UserContext";
import { StyledDiv } from "../../styles/Divs/style";
import Link from "../../components/Links";
import { StyledForm } from "../../styles/Form/style";
import { ButtonHome, StyledPaw } from "../../styles/buttonsIcons";
import { Input } from "../../styles/Input";
import Button from "../../components/Button";
import { PassWord } from "../../components/Inputs/Password";
import { ConfirmPassWord } from "../../components/Inputs/ConfirmPassword";
import { RenderContext } from "../../contexts/RenderContext";

export type iRegisterUser = {
  name?: string;
  password?: string;
  "confirm-password"?: string;
  email?: string;
  phone?: string;
  type?: string;
  register?: UseFormRegister<FieldValues>;
};

export const RegisterPage = () => {
  const { registerUserFunction } = useContext(UserContext);
  const { size } = useContext(RenderContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({ resolver: yupResolver(schema) });

  return (
    <StyledDiv variant="DivPrimary">
      {size < 720 ? (
        <>
          <Link to="/" variant="LinkRegisterHome">
            <ButtonHome />
          </Link>
        </>
      ) : (
        <StyledDiv variant="DivSecondary">
          <img src={LogoReg} alt="" />
        </StyledDiv>
      )}

      <StyledDiv variant="DivTertiary">
        <StyledForm onSubmit={handleSubmit(registerUserFunction)}>
          <StyledDiv variant="DivInnerForm">
            {size < 720 ? (
              <></>
            ) : (
              <Link to="/" variant="LinkRegisterHome">
                <ButtonHome />
              </Link>
            )}
            <h2>Registre-se</h2>
            <p>Seja muito bem vindo a nossa comunidade!</p>
          </StyledDiv>
          <label htmlFor="name">Nome</label>
          <Input
            variant="inputPrimary"
            id="name"
            type="text"
            {...register("name")}
            placeholder="Digite o seu Nome"
          ></Input>
          <p>{errors.name?.message}</p>
          <label htmlFor="email">E-Mail</label>
          <Input
            variant="inputPrimary"
            id="email"
            type="text"
            {...register("email")}
            placeholder="Digite o seu E-Mail"
          ></Input>
          <p>{errors.email?.message}</p>
          <label htmlFor="password">Senha</label>
          <PassWord register={register} />
          <p>{errors.password?.message}</p>
          <label htmlFor="confirm-password">Confirme sua Senha</label>
          <ConfirmPassWord register={register} />
          <p>{errors["confirm-password"]?.message}</p>
          <label htmlFor="phone">Telefone</label>
          <Input
            variant="inputPrimary"
            id="phone"
            type="text"
            {...register("phone")}
            placeholder="Digite o seu Telefone"
          ></Input>
          <p>{errors.phone?.message}</p>
          <Button type="submit">
            Cadastrar <StyledPaw variant="paw" font="#FFD7A8" />
          </Button>

          <Link to="/login" variant="LinkReturnLogin">
            Login <StyledPaw variant="paw" font="#D77127" />
          </Link>
        </StyledForm>
      </StyledDiv>
    </StyledDiv>
  );
};
