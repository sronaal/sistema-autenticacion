import Login from "@/components/auth/Login"
import AuthLayout from "@/layout/AuthLayout"
import { Routes,  Route } from "react-router-dom"

const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={ <AuthLayout/> }>
            <Route index element={ <Login/> }></Route>

          </Route>
        </Routes>
    </>
  )
}

export default AppRoutes