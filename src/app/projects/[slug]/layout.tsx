import type { Metadata } from "next";
import { getProject } from "@/app/projects/util";
import { notFound } from "next/navigation";

type Props = { children: React.ReactNode; params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getProject(params.slug);

  if (!data) {
    notFound();
  }

  const title = data.title ?? data.slug;
  const description = data.description ?? "";

  const url = `/projects/${data.slug}`;

  return {
    title,
    description,
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function ProjectLayout({ children }: Props) {
  return <>{children}</>;
}
