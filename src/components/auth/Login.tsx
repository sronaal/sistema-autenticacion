/* eslint-disable @typescript-eslint/no-explicit-any */
import { schemaLoginForm } from "@/lib/zod"
import { useForm } from "react-hook-form"
import type z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

import { BiSolidUser } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";




const Login = () => {



  const { register, handleSubmit,  formState: { errors }} = useForm<z.infer<typeof schemaLoginForm>>({
    resolver: zodResolver(schemaLoginForm),
    defaultValues: {
      email: '',
      password: ''
    }
  })


  const onSubmit =(credenciales:any) => {
    console.log(credenciales)
  }

  return (
    <>

      <div className="bg-[#0A0A0A]  sm:w-[50%] w-90 h-auto border border-border/50  py-6 text-white rounded-2xl flex flex-col items-center ">
        <h1 className="sm:text-3xl text-2xl font-bold mb-4">Iniciar <span className="text-sky-500">Sesión.</span> </h1>
        <p className="font-light text-center text-gray-300 mb-8">Ingresa tus credenciales para acceder a la <span className="underline underline-offset-4 decoration-2 decoration-sky-500">plataforma</span></p>

        <form className="flex flex-col w-full px-6 py-2" onSubmit={ handleSubmit(onSubmit)}>
          <label className="mb-2">Correo electronico:</label>
          <div className="relative mb-4">
            <BiSolidUser className="absolute left-3  top-5/13  -translate-y-1/2 text-gray-400" />

            <input
              {...register('email')}
              type="email"
              autoComplete="off"
              placeholder="joedoe@email.com"
              className="border w-full pl-10  p-2 focus:border-sky-500 focus:outline focus:outline-sky-500 rounded-md mb-4"
            />
          </div>

          <label className="mb-2">Contraseña</label>
          <div className="relative mb-4">
            <BiSolidLockAlt className="absolute left-3 top-5/16 -translate-y-1/2 text-gray-400"/>
            <input
            {...register('password')}
            autoComplete="off"
            type="password"
            placeholder="********"
            className="border p-2 w-full pl-10  focus:border-sky-500 focus:outline focus:outline-sky-500 rounded-md mb-4"
          />
          </div>

         
          <p className="text-md text-pink-600 mb-4">{errors.email?.message}</p>
          <p className="text-md text-pink-600">{errors.password?.message}</p>

          <button type="submit" className="w-full bg-sky-500 p-3 rounded-md mb-4 hover:cursor-pointer hover:bg-sky-600 hover:text-xl hover:rounded-xl transition-colors duration-300 ">Iniciar Sesión</button>
        
        </form>
        <div className="w-full px-6 flex justify-end mb-4">
          <a className="text-sky-500 hover:underline" href="">¿Olvidaste tu contraseña?</a>
        </div>
        <div className="w-full flex justify-center">
          <span className="text-sm text-gray-300">¿No tienes cuenta? <a href="" className="text-sky-500 font-bold hover:underline">Crear cuenta</a> </span>
        </div>
      </div>

    </>
  )
}

export default Login