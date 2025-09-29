import type { Metadata } from "next";
import { getProject } from "@/app/projects/util";
import { notFound } from "next/navigation";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await getProject(slug);

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

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
