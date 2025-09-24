import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import urlFor from "@/sanity/url";
import Button from "@/app/ui/button";

import Image from "next/image";

import { ProjectContainer } from "./components";

const projectQuery = `*[_type == 'project' && slug.current == $slug][0]{..., content[]{..., videos[]{..., "videoURL": video.asset->url}}}`;

const options = { next: { revalidate: 30 } };

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = await client.fetch<SanityDocument>(projectQuery, await params, options);
  console.log("Fetched project data:", project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col w-screen font-mono py-8 px-16">
      {project.link && (
        <Button
          href={project.link}
          label={project.linkTitle || "Link to Prototype"}
          styling="fixed top-4 right-4 z-100 mix-blend-multiply"
        />
      )}
      <TitlePage data={project} />
      <ProjectContainer project={project} />
    </div>
  );
}

function TitlePage({ data }: { data: SanityDocument }) {
  const imgUrl = urlFor(data.image);

  return (
    <div className="flex flex-col w-full h-screen">
      {imgUrl && (
        <div className="w-full h-[80%] overflow-hidden mb-8">
          <Image
            src={imgUrl}
            width={400}
            height={400}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="md:flex-row flex-col flex justify-between">
        <div>
          <div className="font-semibold uppercase text-2xl">{data.title}</div>
        </div>
      </div>
    </div>
  );
}
