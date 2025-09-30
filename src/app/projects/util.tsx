import fs from "fs";
import path from "path";

export type ProjectDataType = {
  title: string;
  date: string;
  type: string;
  medium: string;
  description: string;
  slug: string;
  heroStyling: string;
  heroIsVideo?: boolean;
  heroPath?: string;
  link?: string;
  linkTitle?: string;
};

export type VideoObjectType = {
  url: string;
  controls?: boolean;
  caption?: string;
};

export type ImageObjectType = {
  url: string;
  caption?: string;
};

export async function getProjects() {
  const mdxFiles = fs
    .readdirSync(path.join(process.cwd(), "src", "content", "projects"))
    .filter((file) => file.endsWith(".mdx"));

  // console.log("Available MDX files:", mdxFiles);

  const projects = await Promise.all(
    mdxFiles.map(async (file) => {
      const { data } = await import(`@/content/projects/${file}`);
      return {
        ...data,
        slug: path.basename(file, path.extname(file)),
      } as ProjectDataType;
    })
  );

  return projects;
}

export async function getProject(slug: string) {
  const { default: Project, data } = await import(
    `@/content/projects/${slug}.mdx`
  );
  return { Project, data };
}
