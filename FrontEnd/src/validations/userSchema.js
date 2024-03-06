import { z } from "zod";

export const userSchema = z.object({
  email: z.string().min(1, { message: "Ingresa un mail" }).email({
    message: "Ingresa un mail valido",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe tener minimo  8 caracteres",
  }),
});

export const userRegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Ingrese su nombre" }),
    lastname: z.string().min(1, { message: "Ingrese su apellido" }),
    email: z.string().min(1, { message: "Ingrese su mail" }).email({
      message: "Ingrese un mail valido",
    }),
    password: z
      .string()
      .min(8, {
        message: "La contraseña debe tener mínimo 8 caracteres",
      })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[.!@#$&%\-=])[a-zA-Z0-9.!@#$&%\-=]{8,}$/, {
        message:
          "La contraseña debe tener al menos una mayuscula, una minuscula y un carácter especial.",
      }),
    confirmPassword: z.string().min(8, {
      message: "La contraseña debe tener mínimo 8 caracteres",
    }),
    phone: z
      .string()
      .min(1, { message: "Ingrese un telefono" })
      .regex(/^[0-9]{8,14}$/, { message: "Ingrese un telefono valido" }),
    city: z.string().min(1, { message: "Ingrese una ciudad" }),
    province: z.string().min(1, { message: "Ingrese una provincia" }),
    day: z.string().min(1, { message: "Ingrese un dia" }),
    month: z.string().min(1, { message: "Ingrese un mes" }),
    year: z.string().min(1, { message: "Ingrese un año" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export const publicationSchema = z.object({
  title: z.string().min(1, { message: "Ingresa un titulo" }),
  description: z.string().min(1, { message: "Ingresa una descripción" }),
  category: z.string().min(1, { message: "Ingresa una categoría" }),
});

export const comentSchema = z.object({
  description: z
    .string()
    .min(1, { message: "No se pueden enviar comentarios vacios" }),
});

export const profileSchema = z.object({
  name: z.string().min(1, { message: "Ingrese su nombre" }),
  lastname: z.string().min(1, { message: "Ingrese su apellido" }),
  phone: z
    .string()
    .min(1, { message: "Ingrese un telefono" })
    .regex(/^[0-9]{8,14}$/, { message: "Ingrese un telefono valido" }),
  city: z.string().min(1, { message: "Ingrese una ciudad" }),
  province: z.string().min(1, { message: "Ingrese una provincia" }),
});
