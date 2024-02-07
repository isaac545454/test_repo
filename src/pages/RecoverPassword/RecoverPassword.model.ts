import { ElementRef, useRef, useState } from "react"
import { informEmail } from "../../service/informEmail"

export const useRecoverPassword = () => {
  const EmailRef = useRef<ElementRef<"input">>(null)
  const [formState, setFormState] = useState({
    error: "",
    loading: false,
  })

  const handleSubmit = async () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regexEmail.test(EmailRef.current?.value ?? "")) {
      setFormState((preview) => {
        return { ...preview, error: "email inválido" }
      })
      return
    }
    setFormState({ loading: true, error: "" })
    try {
      const response = await informEmail(EmailRef.current?.value ?? "")
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setFormState({ loading: false, error: " " })
    }
  }
  return {
    formState,
    handleSubmit,
    EmailRef,
  }
}
