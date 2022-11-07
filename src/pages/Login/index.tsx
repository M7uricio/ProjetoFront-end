import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/Loginschema";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledForm } from "../../styles/Form/style";
import { PassWord } from "../../components/Inputs/Password";
import { StyledDiv } from "../../styles/Divs/style";
import { ButtonHome, StyledPaw } from "../../styles/buttonsIcons";
import LogoLogin from "../../assets/img/Doginho 1.svg";
import Link from "../../components/Links";
import { Input } from "../../styles/Input";
import Button from "../../components/Button";
import { RenderContext } from "../../contexts/RenderContext";

export interface iLoginFormData {
  email?: string;
  password?: string;
}

export const Login = () => {
  const { loginFunction } = useContext(UserContext);
  const { size } = useContext(RenderContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormData> = (data) => {
    loginFunction(data, setLoading);
  };

  return (
    <StyledDiv variant="DivPrimary">
      {size < 720 ? (
        <>
          <Link to="/landing" variant="LinkRegisterHome">
            <ButtonHome />
          </Link>
        </>
      ) : (
        <StyledDiv variant="DivSecondary">
          <img src={LogoLogin} alt="" />
        </StyledDiv>
      )}

      <StyledDiv variant="DivTertiary">
        <StyledForm onSubmit={handleSubmit(submit)}>
          <StyledDiv variant="DivInnerForm">
            {size < 720 ? (
              <></>
            ) : (
              <Link to="/landing" variant="LinkRegisterHome">
                <ButtonHome />
              </Link>
            )}
            <h1>Login</h1>
            <span>Seja muito bem vindo a nossa comunidade!</span>
          </StyledDiv>
          <label htmlFor="Email">Email</label>
          <Input
            variant="inputPrimary"
            id="Email"
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor="Password">Senha</label>
          <PassWord register={register} />
          <p>{errors.password?.message}</p>
          <Button type="submit">
            Entrar <StyledPaw variant="paw" font="#FFD7A8" />
          </Button>
          <h3>Ainda não possui uma conta?</h3>

          <Link variant="LinkReturnLogin" to="/register">
            Cadastre-se <StyledPaw variant="paw" font="#D77127" />
          </Link>
        </StyledForm>
      </StyledDiv>
    </StyledDiv>
  );
};
