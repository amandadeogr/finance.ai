import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import PercentagesPieChart from "./percentages-pie-chart";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import PercentageItem from "./percentages-item";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { TransactionType } from "@prisma/client";

interface PercentagesProps {
  typesPercentage: TransactionPercentagePerType;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const Percentages = ({
  typesPercentage,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: PercentagesProps) => {
  return (
    <Card className="w-1/2">
      <CardContent className="flex flex-col items-center">
        <CardHeader className="w-full border-b py-4 text-start">
          <CardTitle className="text-lg font-bold">Porcentagens</CardTitle>
        </CardHeader>
        <PercentagesPieChart
          {...{ depositsTotal, investmentsTotal, expensesTotal }}
        />

        <div className="w-1/2 space-y-6">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-primary" />}
            title="Receita"
            value={typesPercentage[TransactionType.DEPOSITY]}
          />

          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
            title="Despesas"
            value={typesPercentage[TransactionType.EXPENSE]}
          />

          <PercentageItem
            icon={<PiggyBankIcon size={16} />}
            title="Investimento"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Percentages;
