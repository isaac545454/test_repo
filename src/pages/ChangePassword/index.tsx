import { Button } from "../../components/Button"
import { CardBox } from "../../components/CardBox"
import { Container } from "../../components/Container"
import { BaseInput } from "../../components/Input"
import { FaEye } from "react-icons/fa"
import { useChangePassword } from "./ChangePassword.model"

export const ChangePassword = () => {
  const {
    changePasswork,
    errorState,
    handleSubmit,
    passwordState,
    confirmPassworkRef,
    confirmRef,
    loading,
  } = useChangePassword()

  return (
    <Container>
      <div className="flex-col">
        <CardBox
          img={{
            src: "https://i.pinimg.com/736x/9d/1e/9b/9d1e9bbf31d6af30f72d3359ae0a3885.jpg",
            alt: "quadrado preto",
          }}
          title="Alterar Senha  "
        />
        <div className="flex flex-col gap-8">
          <BaseInput
            type={passwordState.passwork ? "password" : "text"}
            label="Nova Senha"
            ref={confirmRef}
            errorMessage={errorState.passwork}
            icon={() => (
              <FaEye
                size={20}
                onClick={() =>
                  changePasswork("passwork", passwordState.passwork)
                }
              />
            )}
          />
          <BaseInput
            type={passwordState.confirmPasswork ? "password" : "text"}
            label="Repetir Nova Senha"
            errorMessage={errorState.confirmPasswork}
            ref={confirmPassworkRef}
            icon={() => (
              <FaEye
                size={20}
                onClick={() =>
                  changePasswork(
                    "confirmPasswork",
                    passwordState.confirmPasswork
                  )
                }
              />
            )}
          />
        </div>
        <div className=" flex justify-end">
          <Button
            bg="blue"
            className="mt-8  mr-4"
            onClick={handleSubmit}
            disabled={loading}
          >
            Alterar Senha
          </Button>
        </div>
      </div>
    </Container>
  )
}
