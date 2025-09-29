import CustomLink from "@/app/ui/customLink";

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
    <CustomLink href={href} className="select-none">
      <div
        className={`w-fit select-none text-center py-1 px-2 rounded-4xl bg-cream border-dark-gray border-1 font-medium text-sm hover:bg-amber-200 hover:text-dark-gray ${styling}`}
      >
        {label}
      </div>
    </CustomLink>
  );
}
