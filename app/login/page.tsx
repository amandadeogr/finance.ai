import Image from "next/image";
import { Button } from "../_components/ui/button";

const LoginPage = () => {
  return (
    <div className="grid h-full sm:grid-cols-2">
      <div className="m-auto flex max-w-[467px] flex-col justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem vindos</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>

        <Button variant={"outline"}>
          <Image
            src="/google.svg"
            width={20}
            height={20}
            alt="google icon"
            className="mr-2"
          />
          Entrar com Google
        </Button>
      </div>
      <div className="relative">
        <Image src="/login.png" alt="login" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
