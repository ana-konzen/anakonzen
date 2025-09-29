"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { navLinks } from "@/app/navLinks";

export default function NavMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  if (pathname.includes("/projects/") || pathname.includes("mdx")) {
    return (
      <div className="fixed select-none font-medium top-8 left-3 z-50">
        <div className="flex flex-col flex-none h-full space-y-8">
          <Link
            href={"/projects"}
            className={"hover:bg-amber-200 [writing-mode:vertical-lr]"}
          >
            (back)
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed select-none font-sans text-sm font-bold top-8 left-1 z-50">
      <div className="flex flex-col flex-none h-full space-y-4">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={`group w-fit py-2 px-2`}
          >
            <span
              className={`${isActive(link.href) ? "ml-1 [writing-mode:horizontal-tb]" : "group-hover:bg-amber-200 [writing-mode:vertical-lr]"}`}
            >
              {link.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
