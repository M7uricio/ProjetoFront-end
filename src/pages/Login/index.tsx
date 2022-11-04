import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Outlet } from "react-router-dom";
import { loginSchema } from "../../validations/Loginschema";
import { useContext, useState } from "react";
import { FormLogin } from "./styled";
import  { UserContext } from "../../contexts/UserContext";



export interface iLoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { loginFunction } = useContext(UserContext);
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
    <>
      <Outlet />

      <FormLogin onSubmit={handleSubmit(submit)}>
        <h1>Login</h1>
        <label htmlFor="Email">Email</label>
        <input
          id="Email"
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="Password">Senha</label>
        <input
          id="Password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Entrar</button>
        <p>Ainda não possui uma conta?</p>

        <Link className="Link" to="/register">
          Cadastra-se
        </Link>
      </FormLogin>
    </>
  );
};

export default Login;
