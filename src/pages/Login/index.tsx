import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/Loginschema";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledForm } from "../../components/Form/style";
import { PassWord } from "../../components/Inputs/Password";
import { StyledDiv } from "../../components/Divs/style";
import { StyledButtonHome, StyledPaw } from "../../components/Icons";
import LogoLogin from "../../assets/img/Doginho 1.svg";
import Link from "../../components/Links";
import { Input } from "../../components/Inputs/style";
import Button from "../../components/Button";
import { StyledRegisterMain } from "./style";

export interface iLoginFormData {
  email?: string;
  password?: string;
}

export const Login = () => {
  const { userLoginFunction, size } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormData> = (data) => {
    userLoginFunction(data, setLoading);
  };

  return (
    <StyledRegisterMain>
      {size < 720 ? (
        <>
          <Link to="/" variant="LinkRegisterHome">
            <StyledButtonHome />
          </Link>
        </>
      ) : (
        <div className="DivSecondary">
          <img src={LogoLogin} alt="" />
        </div>
      )}

      <div className="DivTertiary">
        <StyledForm onSubmit={handleSubmit(submit)}>
          <StyledDiv variant="DivInnerForm">
            {size < 720 ? (
              <></>
            ) : (
              <Link to="/" variant="LinkRegisterHome">
                <StyledButtonHome />
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
      </div>
    </StyledRegisterMain>
  );
};
