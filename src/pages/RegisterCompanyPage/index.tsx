import React, { useContext } from "react";

import gatinho from "../../assets/img/gatinho.png";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { registerSchema } from "../../validations/registerSchema";
import { UserContext } from "../../contexts/UserContext";
import { iRegisterUser } from "../register";

import { RegisterDiv } from "./style";
import { Title } from "../../styles/title";
import { Text } from "../../styles/text";
import { Input } from "../../styles/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";


const RegisterCompanyPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<iRegisterUser>({
        resolver: yupResolver(registerSchema)
    })

    const {registerCompanyFunction} = useContext(UserContext)

    const onSubmitFunction = (data:iRegisterUser) => {
        registerCompanyFunction(data)
    }

    return (
        <RegisterDiv>
            <div className="imgDiv">
                <img src={gatinho} alt="" />
            </div>
            <div className="formDiv">
                <div className="titleDiv">
                    <Title variant="title1" color="black">Registre-se</Title>
                    <Text variant="text2">Expanda os horizontes do seu negócio</Text>
                </div>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <label htmlFor="name">Nome</label>
                    <Input variant="inputPrimary" height="60px" width="100%" placeholder="Digite seu nome aqui" {...register("name")}>
                    </Input>
                    {<p>{errors.name?.message}</p>}
                    <label htmlFor="email">E-Mail</label>
                    <Input variant="inputPrimary" height="60px" width="100%" placeholder="Digite seu nome aqui" {...register("email")}>
                    </Input>
                    {<p>{errors.email?.message}</p>}
                    <label htmlFor="password">Senha</label>
                    <Input variant="inputPrimary" height="60px" width="100%" placeholder="Digite seu nome aqui" type="password" {...register("password")}>
                    </Input>
                    {<p>{errors.password?.message}</p>}
                    <label htmlFor="confirm-password">Confirme sua Senha</label>
                    <Input variant="inputPrimary" height="60px" width="100%" placeholder="Digite seu nome aqui" type="password" {...register("confirm-password")}>
                    </Input>
                    {<p>{errors["confirm-password"]?.message}</p>}
                    <label htmlFor="phone">Telefone</label>
                    <Input variant="inputPrimary" height="60px" width="100%" placeholder="Digite seu nome aqui" {...register("phone")}>
                    </Input>
                    {<p>{errors.phone?.message}</p>}
                    <Button variant="ButtonPrimary">Cadastrar</Button>
                </form>
                <div className="toLogin">
                    <Text variant="text2">Já possui cadastro?</Text>
                    <Link to="/login">Clique aqui</Link>
                </div>
                <Link to="/landing"><AiFillHome/></Link>
            </div>
        </RegisterDiv>
    )
}

export default RegisterCompanyPage