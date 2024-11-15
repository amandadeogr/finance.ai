"use client";
import { renderTransactionCategory } from "@/app/transactions/helper/renderTransactionCategory";
import { renderTransactionPaymentMethod } from "@/app/transactions/helper/renderTransactionPaymentMethod";
import renderBadge from "@/app/transactions/helper/renderTransactionTypeBadge";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import EditTransaction from "../_components/EditTransaction";
import DeleteTransaction from "../_components/DeleteTransaction";

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
    cell: ({ row: { original: transaction } }) => {
      return renderTransactionCategory(transaction.category);
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Método",
    cell: ({ row: { original: transaction } }) => {
      return renderTransactionPaymentMethod(transaction.paymentMethod);
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) => {
      return transaction.date !== null
        ? new Date(transaction.date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })
        : null;
    },
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) => {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount));
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: transaction } }) => {
      return (
        <div>
          <EditTransaction transaction={transaction} />

          <DeleteTransaction transaction={transaction} />
        </div>
      );
    },
  },
];
