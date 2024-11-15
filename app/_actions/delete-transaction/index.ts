"use server";
import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface DeleteTransactionParams {
  id: string;
}

export const deleteTransaction = async (params: DeleteTransactionParams) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  await db.transaction.delete({
    where: {
      id: params.id,
      userId,
    },
  });
  revalidatePath("/transactions");
};
