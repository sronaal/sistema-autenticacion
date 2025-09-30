import { z } from 'zod'


export const schemaLoginForm = z.object({
    email: z.string('').trim().min(1, 'Ingrese el correo electronico')
        .pipe(z.email('El correo ingresado no es valido')),
    password: z.string().min(1, 'Ingrese la contraseña').max(16, 'La contraseña debe contener max 16 caracteres')
})