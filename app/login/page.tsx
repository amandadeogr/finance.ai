import Image from "next/image";
import { Button } from "../_components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import logo from "/public/logo.svg";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }
  return (
    <main className="grid h-full sm:grid-cols-2">
      <div className="m-auto flex max-w-[467px] flex-col justify-center sm:p-5">
        <Image
          src={"/logo.svg"}
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

        <SignInButton>
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
        </SignInButton>
      </div>
      <div className="relative hidden sm:block">
        <Image src="/login.png" alt="login" fill className="object-cover" />
      </div>
    </main>
  );
};

export default LoginPage;
