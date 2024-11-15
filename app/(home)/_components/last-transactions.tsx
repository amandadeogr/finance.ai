import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions";
import { formatCurrency } from "@/app/_utils/currency";
import { Transaction, TransactionType } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  const getAmountColor = (transaction: Transaction) => {
    if (transaction.type === TransactionType.EXPENSE) {
      return "text-danger";
    }
    if (transaction.type === TransactionType.DEPOSITY) {
      return "text-primary";
    }
    return "text-white";
  };

  const getAmountPrefix = (transaction: Transaction) => {
    if (transaction.type === TransactionType.DEPOSITY) {
      return "+";
    }
    return "-";
  };

  return (
    <ScrollArea className="mb-3 max-h-screen w-full rounded-xl border sm:w-1/3">
      <CardContent className="px-3 sm:p-6">
        <CardHeader className="sticky top-0 flex flex-row items-center justify-between border-b bg-background pt-4 sm:px-0">
          <CardTitle className="text-lg font-bold">
            Últimas Transações
          </CardTitle>
          <Button
            asChild
            variant={"outline"}
            className="rounded-full text-xs font-bold"
          >
            <Link href="/transactions">Ver mais</Link>
          </Button>
        </CardHeader>
        <div className="space-y-6 py-6">
          {lastTransactions.map((transaction) => (
            <div
              className="flex items-center justify-between"
              key={transaction.id}
            >
              {/* esquerda */}
              <div className="flex items-center gap-3">
                {React.createElement(
                  TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod],
                  {
                    className:
                      "w-10 h-10 text-muted-foreground rounded-lg bg-secondary p-2",
                  },
                )}

                <div className="flex flex-col">
                  <p className="text-sm font-bold capitalize">
                    {transaction.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <p className={`text-sm font-bold ${getAmountColor(transaction)}`}>
                {getAmountPrefix(transaction)}{" "}
                {formatCurrency(Number(transaction.amount))}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </ScrollArea>
  );
};

export default LastTransactions;
