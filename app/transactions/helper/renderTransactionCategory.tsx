"use client";

import { TRANSACTION_CATEGORY_LABELS } from "@/app/_constants/transactions";

export const renderTransactionCategory = (
  category: keyof typeof TRANSACTION_CATEGORY_LABELS,
) => {
  return TRANSACTION_CATEGORY_LABELS[category];
};
