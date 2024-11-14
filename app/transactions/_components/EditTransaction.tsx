import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { EditIcon } from "lucide-react";

const EditTransaction = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"}>
          <EditIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar Transação</SheetTitle>
        </SheetHeader>
        <div className="grid justify-start gap-4 py-4">
          <div className="flex flex-col items-start gap-2">
            <p className="text-right">Name</p>
            <input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-right">Name</p>
            <input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter className="flex w-full justify-between">
          <SheetClose asChild>
            <Button
              variant={"secondary"}
              type="submit"
              className="w-full rounded-lg px-4"
            >
              Cancelar
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit" className="w-full rounded-lg px-4">
              Salvar Alterações
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EditTransaction;
