"use client";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../_components/ui/sheet";

const AddTransaction = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"default"} className="rounded-full text-sm font-bold">
          Adicionar Transação
          <ArrowDownUpIcon size={16} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Adicionar Transação</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-right">Name</p>
            <input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <p className="text-right">Username</p>
            <input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Salvar Transação</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AddTransaction;
