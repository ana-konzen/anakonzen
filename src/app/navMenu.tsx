"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { navLinks } from "@/app/navLinks";

export default function NavMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  if (pathname.includes("/projects/")) {
    return (
      <div className="fixed text-sm font-mono uppercase font-bold top-8 left-3 z-50">
        <div className="flex flex-col flex-none h-full space-y-8">
          <Link href={"/projects"} className={"hover:bg-amber-200 [writing-mode:vertical-lr]"}>
            (back)
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed md:text-sm font-mono uppercase font-bold top-8 left-3 z-50">
      <div className="flex flex-col flex-none h-full space-y-8">
        {navLinks.map((link) => (
          <span key={link.href}>
            <Link
              href={link.href}
              className={`${isActive(link.href) ? "bg-amber-200 ml-1 [writing-mode:horizontal-tb]" : "hover:bg-amber-200 [writing-mode:vertical-lr]"}`}
            >
              {link.title}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
