"use client";
import { protectedLinks } from "@/lib/consts/urls";
import { cn } from "@/lib/utils";
import { GripIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const DashboardSidenav: FC = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-5 sm:border sm:p-5 sm:rounded-md">
      {protectedLinks.map((link, i) => {
        const isActive = pathname === link.href;

        if (!i)
          return (
            <Link
              href={link.href}
              className={cn("flex items-start gap-2 p-2", isActive && "bg-muted/80 rounded-md")}
            >
              <GripIcon className="w-10 h-10" />
              <div className="inline-flex flex-col">
                <span>Dashboard</span>
                <span className="text-muted-foreground text-xs">This is your dashboard</span>
              </div>
            </Link>
          );
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn({
              "text-muted-foreground": !isActive, // Default sublink
              "text-foreground": isActive, // Activated sublink
            })}
          >
            {link.label}
          </Link>
        );
      })}
    </aside>
  );
};

export default DashboardSidenav;
