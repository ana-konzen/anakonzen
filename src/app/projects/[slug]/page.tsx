import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import urlFor from "@/sanity/url";
import Button from "@/app/ui/button";

import Image from "next/image";

import { ProjectContainer } from "@/app/projects/components";

const projectQuery = `*[_type == 'project' && slug.current == $slug][0]{..., content[]{..., videos[]{..., "videoURL": video.asset->url}}}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = await client.fetch<SanityDocument>(
    projectQuery,
    await params,
    options
  );
  console.log("Fetched project data:", project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col w-screen font-sans">
      {project.link && (
        <Button
          href={project.link}
          label={project.linkTitle || "Link to Prototype"}
          styling="fixed top-8 right-4 z-100 mix-blend-multiply"
        />
      )}
      <TitlePage data={project} />
      <ProjectContainer project={project} />
    </div>
  );
}

function TitlePage({ data }: { data: SanityDocument }) {
  const imgUrl = urlFor(data.heroImage || data.image);

  return (
    <div className="flex flex-col mb-8 w-full h-screen py-4 px-4 md:px-16">
      {imgUrl && (
        <div className="w-full mix-blend-multiply flex-2 md:h-[70%] h-auto mb-4">
          <Image
            src={imgUrl}
            width={1000}
            height={1000}
            alt={data.title}
            className="md:w-auto md:h-screen w-full h-full object-cover md:-top-30 relative md:-left-16"
          />
        </div>
      )}
      <div className="font-light  text-black ligatures-discretionary hyphens-auto font-serif italic text-8xl md:text-9xl">
        {data.title}
      </div>
    </div>
  );
}
