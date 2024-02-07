import axios from "axios"
import { endpoint } from "../../endpoint"

export const resendCode = async () => {
  const { data } = await axios.post(endpoint.resendCode, { userID: "" })

  return data
}
