import { MdEmail } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";



const ForgetPassword = () => {
  return (
    <div className="bg-[#0A0A0A] w-[40%] h-auto border border-border/50 flex flex-col items-center py-6 rounded-2xl text-white ">
      <h1 className="sm:text-3xl text-2xl font-bold mb-4">Recupera tu  <span className="text-sky-500 underline">contraseña.</span></h1>
      <p className="font-light text-center text-gray-500 mb-4">Ingresa tu correo electrónico para recibir <br /> un enlace de recuperación</p>

      <form className="flex flex-col w-full px-6 py-2">
        <label className="mb-2">Correo Eletronico</label>
        <div className="relative mb-4">
          <MdEmail className="absolute left-3 top-5/22" />
          <input type="email"
            placeholder="joedoe@email.com"
            className="border w-full pl-10 p-2 focus:border-sky-500 focus:outline focus:outline-sky-500 rounded-md mb-4"
          />
        </div>
        <button className="flex items-center text-gray-300 hover:text-gray-100 cursor-pointer justify-center gap-4 bg-sky-500 hover:bg-sky-400 p-2 rounded-md mb-2">
          <MdEmail className="text-xl" />
          Enviar Correo Electronico</button>
      </form>
      <div className="">
        <Link className="w-full flex justify-center items-center gap-2 text-gray-500 hover:text-sky-500 hover:underline" to='/login'>
          <FaArrowLeft />
          <span>Volver al inicio de sesión</span>

        </Link>
      </div>
    </div>
  )
}

export default ForgetPassword