import type { MDXComponents } from "mdx/types";
import { ProjectSection } from "@/app/projects/components/projectSection";
import SecButton from "@/app/ui/tempFile";
import Link from "next/link";

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const linkClass = "font-light";
  const href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={linkClass} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a className={linkClass} {...props} />;
  }

  return (
    <a
      className={linkClass}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

const components: MDXComponents = {
  h2: (props) => (
    <h2 className="text-sm uppercase font-bold mt-4 mb-2" {...props} />
  ),
  a: CustomLink,
};

export function useMDXComponents(): MDXComponents {
  return { ...components, ProjectSection, SecButton };
}
