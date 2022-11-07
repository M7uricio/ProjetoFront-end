import { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { StyledClosedEye, StyledEye } from "../../../styles/buttonsIcons";
import { Input } from "../../../styles/Input";
import { StyledDiv } from "../../../styles/Divs/style";

interface iConfirmPassWord {
  register: UseFormRegister<FieldValues>;
}

export const ConfirmPassWord = ({ register }: iConfirmPassWord) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const showPass = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <StyledDiv variant="PasswordDiv">
      <Input
        variant="inputPrimary"
        id="confirm-password"
        type={passwordShow ? "text" : "password"}
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      {passwordShow ? (
        <StyledEye onClick={() => showPass()} />
      ) : (
        <StyledClosedEye onClick={() => showPass()} />
      )}
    </StyledDiv>
  );
};
