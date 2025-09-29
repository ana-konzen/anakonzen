import CustomLink from "@/app/ui/customLink";

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
    <CustomLink
      href={href}
      className={`font-sans select-none no-underline font-medium hover:font-bold inline-block ${styling}`}
    >
      {label} →
    </CustomLink>
  );
}
