"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarButton } from "./SidebarButton";

export function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="block group">
      <SidebarButton label={label} state={isActive ? "active" : "default"} />
    </Link>
  );
}
