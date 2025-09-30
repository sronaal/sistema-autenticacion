import { useState } from "react";
import { FaUser } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";




const Register = () => {



  const [showPassword, setShowPassword] = useState(false)


  return (
    <div className="bg-[#0A0A0A]  sm:w-[40%] w-90 h-auto border border-border/50  py-6 text-white rounded-2xl flex flex-col items-center">
      <h1 className="sm:text-3xl text-2xl font-bold mb-4">Crear <span className="text-sky-500">Cuenta.</span></h1>
      <p className="font-light text-center text-gray-300 mb-8">Completa el formulario para comenzar a usar la plataforma.</p>

      <form className="flex flex-col w-full px-6 py-2">

        <label className="mb-2">Nombre completo</label>
        <div className="relative mb-2">
          <FaUser className="absolute left-3 top-5/13 -translate-y-1/2 text-gray-400" />
          <input type="text"
            className="border w-full pl-10 p-2 focus:border-sky-500 focus:outline focus:outline-sky-500 rounded-md mb-4  "
            placeholder="Joe Doe"
          />
        </div>
        <label className="mb-2">Correo electrónico</label>
        <div className="relative mb-4">
          <MdEmail className="absolute left-3 top-5/22" />
          <input type="email"
            placeholder="joedoe@email.com"
            className="border w-full pl-10 p-2  focus:border-sky-500 focus:outline focus:outline-sky-500 rounded-md mb-4"
          />
        </div>
        <label className="mb-2">Contraseña:</label>
        <div className="relative mb-4">
          <RiLockPasswordFill className="absolute left-3 top-5/22" />
          <input type={showPassword ? "text" : "password"}
            placeholder="*********"
            className="border w-full pl-10 p-2  focus:border-sky-500 focus:outline focus:outline-sky-500 rounded-md mb-4"
          />

          <button type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-5 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <FaEyeSlash className="w-4 h-4 text-gray-300"/> : <FaEye className="w-4 h-4 text-gray-300"/>}
          </button>

        </div>

        <label className="mb-2">Confimar contraseña:</label>
        <div className="relative mb-4">
          <RiLockPasswordFill className="absolute left-3 top-5/22" />
          <input type={showPassword ? "text" : "password"}
            placeholder="*********"
            className="border w-full pl-10 p-2  focus:border-sky-500 focus:outline focus:outline-sky-500 rounded-md mb-4"
          />
          <button type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-5 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <FaEyeSlash className="w-4 h-4 text-gray-300" /> : <FaEye className="w-4 h-4 text-gray-300" />}
          </button>
        </div>

        <button className="bg-sky-500 p-2 rounded-md mb-2 cursor-pointer">Registrarme</button>
      </form>
      <div className="w-full flex justify-center">
        <span className="text-sm text-gray-300">¿Ya tienes una cuenta?  
          <Link to='/login' className="text-sky-500 font-bold hover:underline hover:text-md">   Ingresar</Link>
        </span>
      </div>


    </div>
  )
}

export default Register