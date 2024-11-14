"use client";

import { TRANSACTION_PAYMENT_METHOD_LABELS } from "@/app/_constants/transactions";

export const renderTransactionPaymentMethod = (
  transaction: keyof typeof TRANSACTION_PAYMENT_METHOD_LABELS,
) => {
  return TRANSACTION_PAYMENT_METHOD_LABELS[transaction];
};
