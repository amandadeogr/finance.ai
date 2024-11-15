import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import MonthSelect from "./_components/month-select";
import { isMatch } from "date-fns";
import getDashboard from "../_data/get-dashboard";
import SummaryCard from "./_components/summary-card";
import LastTransactions from "./_components/last-transactions";
import ExpensesPerCategories from "./_components/expenses-per-categories";
import Percentages from "./_components/percentages";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const HomePage = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }
  const dashboard = await getDashboard(month);

  return (
    <main>
      <div className="header my-6 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <MonthSelect />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:gap-10">
        <div className="mb-5 w-full space-y-6 sm:w-2/3">
          <SummaryCard
            size="large"
            type="total"
            label="Saldo"
            amount={dashboard.balance}
          />
          <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
            <SummaryCard
              size="small"
              type="deposity"
              label="Receita"
              amount={dashboard.depositsTotal}
            />
            <SummaryCard
              size="small"
              type="expense"
              label="Despesas"
              amount={dashboard.expensesTotal}
            />
            <SummaryCard
              size="small"
              type="investment"
              label="Investimento"
              amount={dashboard.investmentsTotal}
            />
          </div>

          <div className="flex flex-col justify-between gap-6 sm:flex-row">
            <Percentages {...dashboard} />
            <ExpensesPerCategories
              expensesPerCategory={dashboard.totalExpensePerCategory}
            />
          </div>
        </div>

        <LastTransactions lastTransactions={dashboard.lastTransactions} />
      </div>
    </main>
  );
};

export default HomePage;
