"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { Pie, PieChart } from "recharts";

interface ChartData {
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSITY]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

const PercentagesPieChart = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: ChartData) => {
  const chartData = [
    {
      type: TransactionType.DEPOSITY,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
  ];
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent className="p-2" hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="amount"
          nameKey="type"
          innerRadius={60}
        />
      </PieChart>
    </ChartContainer>
  );
};

export default PercentagesPieChart;
