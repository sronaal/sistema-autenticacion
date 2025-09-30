import { Link } from "react-router-dom"


const Index = () => {
  return (
    <div className="sm:w-[35%] h-auto rounded-xl text-center border p-4">
        <h1 className="sm:text-4xl font-bold text-sky-500 mb-4">Bienvenido</h1>
        <p className="text-gray-400 mb-10">Sistema de autenticación seguro para tu empresa</p>
        <div className="flex justify-center flex-col">
            <Link to='/login' className="bg-sky-500 w-full hover:bg-sky-400 cursor-pointer p-3 rounded-md mb-4">Iniciar sesión</Link>
            <Link to='/register' className="bg-gray-950 border hover:bg-gray-900 cursor-pointer border-sky-200 w-full p-3 rounded-md mb-4">Crear cuenta</Link>
            <Link to='/forget' className="hover:text-sky-500 hover:underline">¿Olvidaste tu contraseña?</Link>
        </div>
    </div>
  )
}

export default Index