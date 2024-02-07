import { Button } from "../../components/Button"
import { CardBox } from "../../components/CardBox"
import { Container } from "../../components/Container"
import { BaseInput } from "../../components/Input"
import { Link } from "../../components/Link"
import { useForgotPass } from "./ForgotPass.model"

export const ForgotPass = () => {
  const {
    formState,
    handleResendEmail,
    handleSubmit,
    isZero,
    InputRef,
    contador,
  } = useForgotPass()

  return (
    <Container>
      <div className="flex-col">
        <CardBox
          img={{
            src: "https://i.pinimg.com/736x/9d/1e/9b/9d1e9bbf31d6af30f72d3359ae0a3885.jpg",
            alt: "quadrado preto",
          }}
          title="Esqueci Minha Senha"
          subtitle="Você Receberá um E-mail com código para alterar sua senha"
        />
        <div className="flex flex-col   gap-6 ">
          <BaseInput
            label="Código"
            errorMessage={formState.errors}
            ref={InputRef}
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          {isZero && (
            <>
              <Button
                border="blue"
                color="blue"
                weight="bold"
                disabled={formState.loading}
                onClick={handleResendEmail}
              >
                Não Recebi o Código
              </Button>
              <Button
                bg="blue"
                onClick={handleSubmit}
                disabled={formState.loading}
              >
                Enviar
              </Button>
            </>
          )}
          {!isZero && (
            <Button bg="gray" color="gray" weight="bold" disabled>
              Aguarde... {contador}s
            </Button>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <Link to="login">Voltar Para Tela de Login</Link>
        </div>
      </div>
    </Container>
  )
}
