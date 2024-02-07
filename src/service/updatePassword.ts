import axios from "axios"
import { endpoint } from "../../endpoint"

type UpdatePasswordParams = {
  password: string
}

export const updatePassword = async ({ password }: UpdatePasswordParams) => {
  const { data } = await axios.post(endpoint.updatePassword, {
    password,
    email: localStorage.getItem("email"),
  })

  return data
}
