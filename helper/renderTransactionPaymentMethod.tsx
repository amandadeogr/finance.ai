"use client";
const TRANSACTION_PAYMENT_METHODS = {
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_SLIP: "Boleto",
  BANK_TRANSFER: "Transferência Bancária",
  OTHER: "Outros",
  PIX: "PIX",
};

export const renderTransactionPaymentMethod = (
  transaction: keyof typeof TRANSACTION_PAYMENT_METHODS,
) => {
  return TRANSACTION_PAYMENT_METHODS[transaction];
};
