import {z} from "zod";

export const userSchema = z.object({
    email: z.string().min(1, {message: "Ingresa un mail"}).email({
        message: "Ingresa un mail valido",
    }),
    password: z.string().min(8, {
        message: "La contraseña debe tener minimo  8 caracteres",
    })

    })
