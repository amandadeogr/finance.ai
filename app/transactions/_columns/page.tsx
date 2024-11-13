"use client";
import renderTransactionCategory from "@/helper/renderTransactionCategory";
import renderTransactionPaymentMethod from "@/helper/renderTransactionPaymentMethod";
import renderBadge from "@/helper/renderTransactionTypeBadge";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => renderBadge(transaction),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      renderTransactionCategory(transaction),
  },
  {
    accessorKey: "paymentMethod",
    header: "Método",
    cell: ({ row: { original: transaction } }) => {
      renderTransactionPaymentMethod(transaction);
    },
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
