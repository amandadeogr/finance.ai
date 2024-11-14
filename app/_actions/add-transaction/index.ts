// server actions => é uma rota http
"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface AddTransactionParams {
  name: string;
  type: TransactionType;
  amount: number;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

const addTransaction = async (params: AddTransactionParams) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) throw new Error("Usuário não autenticado");

  await db.transaction.create({
    data: { ...params, userId },
  });
  revalidatePath("/transactions");
};

export default addTransaction;