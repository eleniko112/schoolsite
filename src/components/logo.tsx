import { GraduationCap } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-primary/90">
        <GraduationCap className="h-6 w-6" />
      </div>
      <div className="overflow-hidden">
        <h2 className="font-headline text-lg font-bold leading-tight text-sidebar-foreground transition-opacity group-data-[collapsible=icon]:-translate-x-96 group-data-[collapsible=icon]:opacity-0">
          Poti School
        </h2>
      </div>
    </Link>
  );
}
