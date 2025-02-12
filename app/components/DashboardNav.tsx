"use client";
import { cn } from "@/lib/utils";
import { CreditCardIcon, HomeIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCardIcon },
];

export default function DashboardNav() {
  const pathname = usePathname();
  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item, idx) => (
        <Link key={idx} href={item.href}>
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === item.href ? "bg-accent" : "bg-transparent"
            )}
          >
            <item.icon className="mr-2 h-4 w-4 text-primary" />
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
