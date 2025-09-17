import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
import urlFor from "@/sanity/url";

import Image from "next/image";

import { ProjectContainer } from "./components";

const projectQuery = `*[_type == "project" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = await client.fetch<SanityDocument>(projectQuery, await params, options);
  console.log("Fetched project data:", project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col w-screen font-mono p-8">
      <TitlePage data={project} />
      {project.content && <ProjectContainer content={project.content} />}
    </div>
  );
}

function TitlePage({ data }: { data: SanityDocument }) {
  const imgUrl = urlFor(data.image);

  return (
    <div className="flex flex-col w-full md:h-screen">
      {imgUrl && (
        <div className="w-full overflow-hidden mb-8">
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
          <div className="font-semibold uppercase text-2xl mb-4">{data.title}</div>
          <div className="md:flex-row flex-col flex space-y-4 md:space-y-0 md:space-x-8">
            {data.date && <ProjectDetails title="Date" data={data.date} />}
            {data.type && <ProjectDetails title="Type" data={data.type} />}
            {data.medium && <ProjectDetails title="Made with" data={data.medium} />}
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-60 md:text-right">{data.description}</div>
      </div>
    </div>
  );
}

function ProjectDetails({ title, data }: { title: string; data: string }) {
  return (
    <div className="w-32">
      <p className="font-sans text-sm lowercase font-semibold">{title}</p>
      <p>{data}</p>
    </div>
  );
}
