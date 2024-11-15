import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionsColumns } from "./_columns/page";
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
      <div className="header my-6 flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Transações</h2>
        <UpsertTransactionDialog />
      </div>

      <DataTable columns={transactionsColumns} data={transactions} />
    </main>
  );
};

export default TransactionsPage;
