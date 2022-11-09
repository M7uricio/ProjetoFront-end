import * as yup from "yup";

export const EditUserSchema = yup.object().shape({
  password: yup.string().required("Insira uma Nova Senha!"),
});
