import { CardBox } from "../../components/CardBox"
import { Container } from "../../components/Container"
import { BaseInput } from "../../components/Input"
import { Button } from "../../components/Button"

import { useRecoverPassword } from "./RecoverPassword.model"

export const RecoverPassword = () => {
  const { formState, handleSubmit, EmailRef } = useRecoverPassword()

  return (
    <Container>
      <div className="flex-col">
        <CardBox
          img={{
            src: "https://i.pinimg.com/736x/9d/1e/9b/9d1e9bbf31d6af30f72d3359ae0a3885.jpg",
            alt: "quadrado preto",
          }}
          title="Insira seu Email"
        />
        <div>
          <BaseInput
            label="Email"
            type="email"
            ref={EmailRef}
            errorMessage={formState.error}
          />
        </div>
        <div className="flex justify-end mt-6">
          <Button bg="blue" disabled={formState.loading} onClick={handleSubmit}>
            Enviar
          </Button>
        </div>
      </div>
    </Container>
  )
}
