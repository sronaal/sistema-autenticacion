import { Outlet } from "react-router-dom";
import { GrSecure } from "react-icons/gr";

const AuthLayout = () => {
  return (
    <div className="bg-[#0A0A0A] sm:p-4 text-white min-h-screen flex flex-col justify-center items-center px-4">
     
      <div className="flex items-center gap-2 py-2 mt-6 sm:mt-0 mb-8">
        <GrSecure className="sm:text:3xl  text-4xl text-sky-500" />
        <h1 className="sm:text-3xl text-2xl font-bold">SaaS Auth Pro</h1>
      </div>
      <Outlet />

    </div>
  );
};

export default AuthLayout;
