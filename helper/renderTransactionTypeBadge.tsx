"use client";
import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

const renderBadge = (transaction: Transaction) => {
  const iconSize = 10;
  const iconClass = "mr-2";

  const getBadgeProps = (
    type: TransactionType,
  ): {
    variant: "default" | "destructive" | "secondary";
    className: string;
    label: string;
  } => {
    switch (type) {
      case TransactionType.DEPOSITY:
        return {
          variant: "default",
          className: "fill-success",
          label: "Depósito",
        };
      case TransactionType.EXPENSE:
        return {
          variant: "destructive",
          className: "fill-destructive",
          label: "Gasto",
        };
      default:
        return {
          variant: "secondary",
          className: "fill-white",
          label: "Investimento",
        };
    }
  };

  const { variant, className, label } = getBadgeProps(transaction.type);

  return (
    <Badge variant={variant}>
      <CircleIcon size={iconSize} className={`${iconClass} ${className}`} />
      {label}
    </Badge>
  );
};

export default renderBadge;
