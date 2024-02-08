import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { ReactNode } from "react";

interface GlobalSheetProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export function GlobalSheet({ title, children, className }: GlobalSheetProps) {

  return (
    <Sheet className={className}>
      <SheetTrigger asChild>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
