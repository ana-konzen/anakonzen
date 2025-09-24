import Link from "next/link";

export default function Button({
  href,
  label,
  styling = "",
}: {
  href: string;
  label: string;
  styling?: string;
}) {
  return (
    <Link href={href}>
      <div
        className={`uppercase w-fit text-center px-2 bg-dark-gray text-cream font-mono font-bold text-sm hover:bg-amber-200 hover:text-dark-gray ${styling}`}
      >
        {label}
      </div>
    </Link>
  );
}
