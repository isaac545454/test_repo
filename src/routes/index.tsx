import { createBrowserRouter } from "react-router-dom"
import { ForgotPass } from "../pages/ForgotPass"
import { ChangePassword } from "../pages/ChangePassword"
import { RecoverPassword } from "../pages/RecoverPassword"

export const routes = createBrowserRouter([
  {
    path: "/esqueci-a-senha",
    element: <ForgotPass />,
  },
  {
    path: "/nova-senha",
    element: <ChangePassword />,
  },
  {
    path: "/recuperar-senha",
    element: <RecoverPassword />,
  },
])
