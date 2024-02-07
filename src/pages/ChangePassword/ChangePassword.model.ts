import { ElementRef, useRef, useState } from "react"
import { updatePassword } from "../../service/updatePassword"

export const useChangePassword = () => {
  const confirmRef = useRef<ElementRef<"input">>(null)
  const confirmPassworkRef = useRef<ElementRef<"input">>(null)
  const [passwordState, setPasswordState] = useState({
    passwork: true,
    confirmPasswork: true,
  })

  const [loading, setLoading] = useState(false)
  const [errorState, setErrosState] = useState({
    passwork: "",
    confirmPasswork: "",
  })

  const handleSubmit = async () => {
    if (confirmRef?.current && confirmRef?.current?.value?.length < 6) {
      setErrosState((prev) => {
        return { ...prev, passwork: "informe sua nova senha" }
      })
      return
    }
    if (
      confirmPassworkRef?.current &&
      confirmPassworkRef?.current?.value.length < 6
    ) {
      setErrosState((prev) => {
        return {
          ...prev,
          confirmPasswork: "informe sua confirmação da senha",
        }
      })
      return
    }

    if (
      confirmPassworkRef?.current?.value !== confirmRef?.current?.value?.length
    ) {
      setErrosState({
        passwork: "senhas diferentes",
        confirmPasswork: "senhas diferentes",
      })
      return
    }

    setErrosState({
      passwork: "",
      confirmPasswork: "",
    })
    setLoading(true)

    try {
      const response = await updatePassword({
        password: confirmRef.current?.value ?? "",
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const changePasswork = (key: string, value: boolean) => {
    setPasswordState((preview) => {
      return { ...preview, [key]: !value }
    })
  }
  return {
    errorState,
    changePasswork,
    handleSubmit,
    passwordState,
    confirmRef,
    confirmPassworkRef,
    loading,
  }
}
