import axios from "axios"
import { endpoint } from "../../endpoint"

export const codeConfirmation = async (code: string) => {
  const { data } = await axios.post(endpoint.codeConfirmation, {
    code,
  })

  return data
}
