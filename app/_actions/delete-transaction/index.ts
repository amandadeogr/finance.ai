"use server";
import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface DeleteTransactionParams {
  id: string;
}

export const deleteTransaction = async (params: DeleteTransactionParams) => {
  const { userId } = await auth();
  if (!userId) throw new Error("Usuário não autenticado");

  await db.transaction.delete({
    where: {
      id: params.id,
    },
  });
  revalidatePath("/transactions");
};
