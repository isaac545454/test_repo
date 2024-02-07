import { ElementRef, useEffect, useRef, useState } from "react"
import { codeConfirmation } from "../../service/codeConfirmation"

export const useForgotPass = () => {
  const [contador, setContador] = useState(20)
  const InputRef = useRef<ElementRef<"input">>(null)
  const isZero = contador === 0
  const [formState, setFormState] = useState({
    errors: "",
    loading: false,
  })

  useEffect(() => {
    const decrementarContador = () => {
      if (contador > 0) setContador(contador - 1)
    }
    const intervalId = setInterval(decrementarContador, 1000)
    return () => clearInterval(intervalId)
  }, [contador])

  const handleSubmit = async () => {
    if (InputRef.current && InputRef.current?.value?.length < 6) {
      setFormState((preview) => {
        return { ...preview, errors: "É necessário ter 6 caracteres." }
      })
      return
    }
    setFormState((preview) => {
      return { ...preview, errors: "" }
    })
    setFormState((prev) => {
      return {
        ...prev,
        loading: true,
      }
    })

    try {
      const response = await codeConfirmation(String(InputRef.current?.value))
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setFormState((prev) => {
        return {
          ...prev,
          loading: false,
        }
      })
    }
  }

  const handleResendEmail = () => {}
  return {
    handleResendEmail,
    handleSubmit,
    isZero,
    formState,
    InputRef,
    contador,
  }
}
