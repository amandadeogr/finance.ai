import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_columns/transactionsColumns";
import UpsertTransactionDialog from "../_components/upsert-transaction";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  return (
    <main>
      <div className="header sticky top-0 z-50 flex w-full items-center justify-between bg-background py-6">
        <h2 className="text-2xl font-bold">Transações</h2>
        <UpsertTransactionDialog label="Incluir" />
      </div>

      <DataTable columns={transactionsColumns} data={transactions} />
    </main>
  );
};

export default TransactionsPage;
