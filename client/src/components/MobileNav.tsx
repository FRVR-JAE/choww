import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-red-700" />
      </SheetTrigger>

      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to chow</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-red-700 ">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
