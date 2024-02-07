import axios from "axios"
import { endpoint } from "../../endpoint"

type UpdatePasswordParams = {
  password: string
  confirmPasswor: string
}

export const updatePassword = async ({
  confirmPasswor,
  password,
}: UpdatePasswordParams) => {
  const { data } = await axios.post(endpoint.updatePassword, {
    confirmPasswor,
    password,
  })

  return data
}
