import React from "react";
import { RegisterDiv } from "./style";


const RegisterCompanyPage = () => {

    return (
        <RegisterDiv>
            <div className="imgDiv">
                <img src="" alt="" />
            </div>
            <div>
                {/* <form onSubmit={handleSubmit(registerUserFunction)}>
                    <label htmlFor="name">Nome</label>
                    <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Digite o seu Nome"
                    ></input>
                    <p>{errors.name?.message}</p>
                    <label htmlFor="email">E-Mail</label>
                    <input
                    id="email"
                    type="text"
                    {...register("email")}
                    placeholder="Digite o seu E-Mail"
                    ></input>
                    <p>{errors.email?.message}</p>
                    <label htmlFor="password">Senha</label>
                    <input
                    id="password"
                    type="text"
                    {...register("password")}
                    placeholder="Digite a senha"
                    ></input>
                    <p>{errors.password?.message}</p>
                    <label htmlFor="confirm-password">Confirme sua Senha</label>
                    <input
                    id="confirm-password"
                    type="text"
                    {...register("confirm-password")}
                    placeholder="Digite a senha novamente"
                    ></input>
                    <p>{errors["confirm-password"]?.message}</p>
                    <label htmlFor="phone">Telefone</label>
                    <input
                    id="phone"
                    type="text"
                    {...register("phone")}
                    placeholder="Digite o seu Telefone"
                    ></input>
                    <p>{errors.phone?.message}</p>
                    <button type="submit">Cadastrar</button>
                </form> */}
            </div>
        </RegisterDiv>
    )
}

export default RegisterCompanyPage