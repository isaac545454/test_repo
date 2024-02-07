import axios from "axios"
import { endpoint } from "../../endpoint"

export const informEmail = async (email: string) => {
  const { data } = await axios.post(endpoint.informEmail, {
    email,
  })
  return data
}
