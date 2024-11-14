import UpsertTransactionDialog from "@/app/_components/upsert-transaction";
import { Transaction } from "@prisma/client";

interface EditTransactionProps {
  transaction: Transaction;
}

const EditTransaction = ({ transaction }: EditTransactionProps) => {
  return (
    <UpsertTransactionDialog
      defaultValues={{
        ...transaction,
        amount: Number(transaction?.amount),
      }}
      transactionId={transaction?.id}
      isEdit={true}
    />
  );
};

export default EditTransaction;
