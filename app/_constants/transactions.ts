import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

import { CreditCardIcon } from "lucide-react";
import { ScanBarcodeIcon } from "lucide-react";
import { LandmarkIcon } from "lucide-react";
import { BanknoteIcon } from "lucide-react";
import { ComponentIcon } from "lucide-react";
import { ArrowLeftRightIcon } from "lucide-react";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: CreditCardIcon,
  [TransactionPaymentMethod.DEBIT_CARD]: CreditCardIcon,
  [TransactionPaymentMethod.BANK_TRANSFER]: LandmarkIcon,
  [TransactionPaymentMethod.BANK_SLIP]: ScanBarcodeIcon,
  [TransactionPaymentMethod.CASH]: BanknoteIcon,
  [TransactionPaymentMethod.PIX]: ComponentIcon,
  [TransactionPaymentMethod.OTHER]: ArrowLeftRightIcon,
};

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
  LOAN: "Empréstimo",
  CREDIT_CARD: "Cartão de Crédito",
};
export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};
export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSITY,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];
export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
  },
];
export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
  },
  {
    value: TransactionCategory.LOAN,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.LOAN],
  },
  {
    value: TransactionCategory.CREDIT_CARD,
    label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.CREDIT_CARD],
  },
];
