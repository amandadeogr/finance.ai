// server actions => é uma rota http
"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { upsertTransaction } from "./schema";
import { revalidatePath } from "next/cache";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  type: TransactionType;
  amount: number;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

const addTransaction = async (params: UpsertTransactionParams) => {
  upsertTransaction.parse(params);
  const { userId } = await auth();
  if (!userId) throw new Error("Usuário não autenticado");

  if (params.id) {
    await db.transaction.upsert({
      where: {
        id: params.id,
        userId,
      },
      update: { ...params, userId },
      create: { ...params, userId },
    });
  } else {
    await db.transaction.create({
      data: { ...params, userId },
    });
  }
  revalidatePath("/transactions");
};

export default addTransaction;
