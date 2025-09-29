import { ProjectContainer } from "@/app/projects/components/projectContainer";
import { TitlePage } from "@/app/projects/components/titlePage";
import { getProjects, getProject } from "@/app/projects/util";
import { notFound } from "next/navigation";
import Button from "@/app/ui/button";



export async function generateStaticParams() {
  const projectData = await getProjects();
  return projectData.map((project) => ({ slug: project.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { Project, data } = await getProject(slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="w-screen">
      {data.link && (
        <Button
          href={data.link}
          label={data.linkTitle || "Link to Prototype"}
          styling="fixed top-8 right-4 z-100 mix-blend-multiply"
        />
      )}
      <TitlePage data={data} slug={slug} />
      <ProjectContainer project={data}>
        <Project />
      </ProjectContainer>
    </div>
  );
}
