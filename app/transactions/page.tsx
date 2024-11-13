import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_columns/page";
import AddTransaction from "./AddTransaction";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <main>
      <div className="header my-6 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Transações</h2>
        <AddTransaction />
      </div>

      <DataTable columns={transactionsColumns} data={transactions} />
    </main>
  );
};

export default TransactionsPage;
