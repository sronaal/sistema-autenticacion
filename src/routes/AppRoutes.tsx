import ForgetPassword from "@/components/auth/ForgetPassword"
import Index from "@/components/auth/Index"
import Login from "@/components/auth/Login"
import Register from "@/components/auth/Register"
import AuthLayout from "@/layout/AuthLayout"
import { Routes,  Route } from "react-router-dom"

const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={ <AuthLayout/> }>
            <Route index element={ <Index/> }></Route>
            <Route path="login" element={ <Login/> }></Route>
            <Route path="register" element={ <Register/> }></Route>
            <Route path="forget" element={ <ForgetPassword/> }></Route>
          </Route>
        </Routes>
    </>
  )
}

export default AppRoutes