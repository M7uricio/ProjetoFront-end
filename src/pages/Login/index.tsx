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
import { Input } from "../../styles/Input";
import Button from "../../components/Button";
import { RenderContext } from "../../contexts/RenderContext";
import { Title } from "../../styles/title";
import { Text } from "../../styles/text";
import { RegisterDiv } from "./style";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";


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
    <RegisterDiv>
      <div className="imgDiv">
        <img src={LogoLogin} alt="" />
      </div>
      <div className="formDiv">
        <div className="titleDiv">
          <Title variant="title1" color="black">Login</Title>
          <Text variant="text2">Seja bem-vindo a nossa comunidade!</Text>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="email">Email</label>
          <Input variant="inputPrimary" height="60px" width="100%" placeholder="Digite seu nome aqui" {...register("email")}>
          </Input>
          {<p>{errors.email?.message}</p>}

          <label htmlFor="password">Senha</label>
          <Input variant="inputPrimary" height="60px" width="100%" placeholder="Digite seu nome aqui" {...register("password")}>
          </Input>
          {<p>{errors.password?.message}</p>}

          <Button type="submit">Cadastrar <StyledPaw variant="paw" font="#FFD7A8" /></Button>
                </form>
                <div className="toLogin">
                    <Text variant="text2">Ainda não possui cadastro?</Text>
                    <Link to="/login">Clique aqui</Link>
                </div>
                <Link to="/"><AiFillHome/></Link>
            </div>
        </RegisterDiv>
  );
};
