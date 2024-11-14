"use client";
import { deleteTransaction } from "@/app/_actions/delete-transaction";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { useToast } from "@/app/_hooks/use-toast";
import { Transaction } from "@prisma/client";
import { TrashIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";

interface DeleteTransactionProps {
  transaction: Transaction;
}

const DeleteTransaction = ({ transaction }: DeleteTransactionProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const onDelete = async () => {
    try {
      await deleteTransaction({ id: transaction.id });
      setDialogIsOpen(false);
      toast({
        title: "Transação deletada com sucesso!",
        variant: "destructive",
        className: "text-white",
      });
    } catch (error) {
      console.error(error);
    }
  };
  const { toast } = useToast();
  return (
    <Dialog
      open={dialogIsOpen}
      onOpenChange={(open) => {
        setDialogIsOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <TrashIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-96">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <XCircleIcon size={18} className="fill-danger text-black" />
            Deseja deletar essa transação?
          </DialogTitle>
          <DialogDescription className="py-3">
            Uma vez deletada não poderá recuperá-la.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button variant={"outline"}>Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant={"destructive"}
              type="submit"
              onClick={onDelete}
              className="text-white"
            >
              Deletar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTransaction;
