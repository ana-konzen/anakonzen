import Link from "next/link";
export default function SecButton({
  href,
  label,
  styling,
}: {
  href: string;
  label: string;
  styling?: string;
}) {
  return (
    <Link
      href={href}
      className={`font-sans no-underline font-medium hover:font-bold inline-block ${styling}`}
    >
      {label} →
    </Link>
  );
}
