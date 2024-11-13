"use client";

const TRANSACTION_CATEGORY = {
  EDUCATION: "Educação",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  ENTERTAINMENT: "Entretenimento",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidade",
};

export const renderTransactionCategory = (
  category: keyof typeof TRANSACTION_CATEGORY,
) => {
  return TRANSACTION_CATEGORY[category];
};
