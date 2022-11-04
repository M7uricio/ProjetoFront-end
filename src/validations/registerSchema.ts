import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required(),
  password: yup.string().min(8, "Minimo de 8 caracteres").required(),
  "confirm-password": yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  email: yup.string().required(),
  phone: yup.string().required(),
  type: yup.string(),
});
