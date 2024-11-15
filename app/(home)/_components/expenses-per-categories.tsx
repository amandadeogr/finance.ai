import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_LABELS } from "@/app/_constants/transactions";
import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";
import { formatCurrency } from "@/app/_utils/currency";

interface ExpensesPerCategoriesProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const ExpensesPerCategories = ({
  expensesPerCategory,
}: ExpensesPerCategoriesProps) => {
  return (
    <ScrollArea className="max-h-96 w-1/2 rounded-3xl border">
      <CardContent>
        <CardHeader className="sticky top-0 flex flex-row items-center justify-between border-b bg-background px-0 py-4">
          <CardTitle className="text-lg font-bold">
            Despesas por Categoria
          </CardTitle>
        </CardHeader>

        <div className="space-y-6 pt-6">
          {expensesPerCategory.map((category) => (
            <div key={category.category} className="flex flex-col gap-2">
              <div className="flex w-full justify-between">
                <p className="text-sm font-bold">
                  {TRANSACTION_CATEGORY_LABELS[category.category]}
                </p>
                <p className="text-sm font-bold">
                  {category.percentageOfTotal}%
                </p>
              </div>
              <Progress value={category.percentageOfTotal} />
              <span className="text-sm text-muted-foreground">
                {formatCurrency(category.totalAmount)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensesPerCategories;
