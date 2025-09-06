"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { navLinks } from "@/app/navLinks";

export default function NavMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="fixed md:text-sm appearance-none font-mono uppercase font-bold top-8 left-3 z-50">
      <div className="flex appearance-none h-full space-x-8 [writing-mode:vertical-lr]">
        {navLinks.map((link) => (
          <span key={link.href}>
            <Link
              href={link.href}
              className={`${isActive(link.href) ? "bg-amber-200 [writing-mode:horizontal-tb]" : "hover:bg-amber-200"} appearance-none`}
            >
              {link.title}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
