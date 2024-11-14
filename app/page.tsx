import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  return <main>olá mundo!</main>;
};

export default HomePage;
