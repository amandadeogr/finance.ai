import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction";
import React from "react";
import CardIcon from "./card-icon";
import { formatCurrency } from "@/app/_utils/currency";

interface SummaryCardProps {
  size?: string;
  type: string;
  label: string;
  amount: number;
}

const SummaryCard = ({ size, type, label, amount }: SummaryCardProps) => {
  return (
    <Card
      className={`w-full ${size !== "small" ? "bg-[#161716] py-5" : "py-2"}`}
    >
      <CardContent className={`flex items-end justify-between`}>
        <CardHeader className="grid items-center justify-start py-0">
          <CardDescription className="flex items-center gap-3">
            <CardIcon type={type} />
            {label}
          </CardDescription>
          <CardTitle
            className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
          >
            {formatCurrency(amount)}
          </CardTitle>
        </CardHeader>
        <div className="">
          {size === "large" && <UpsertTransactionDialog />}
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
