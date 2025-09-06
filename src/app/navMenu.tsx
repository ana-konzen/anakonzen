"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { navLinks } from "@/app/navLinks";

export default function NavMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed md:text-sm font-mono uppercase font-bold top-8 w-80 left-3 z-50">
      <ul className="flex h-full space-x-8 [writing-mode:vertical-lr]">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${
                isActive(link.href) ? "bg-amber-200 [writing-mode:horizontal-tb]" : "hover:bg-amber-200"
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
