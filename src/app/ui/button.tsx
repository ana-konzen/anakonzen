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
        className={`w-fit text-center py-1 px-2 rounded-4xl bg-cream border-dark-gray border-1 font-medium text-sm hover:bg-amber-200 hover:text-dark-gray ${styling}`}
      >
        {label}
      </div>
    </Link>
  );
}
