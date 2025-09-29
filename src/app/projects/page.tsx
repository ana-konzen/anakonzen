import Image from "next/image";
import SecButton from "@/app/ui/secButton";

import { getProjects, ProjectDataType } from "@/app/projects/util";

export default async function ProjectsPage() {
  const projectData = await getProjects();

  return <Gallery content={projectData} />;
}

function Gallery({ content }: { content: ProjectDataType[] }) {
  return (
    <div className="flex flex-col space-y-40 w-full sm:px-48 md:px-24 px-24 py-8 ">
      {content.map((item) => (
        <GalleryItem key={item.title} item={item} />
      ))}
    </div>
  );
}

function GalleryItem({ item }: { item: ProjectDataType }) {
  const imgUrl = `/thumbnails/${item.slug}.gif`;

  return (
    <div className="md:justify-center relative flex-col flex md:flex-row overflow-hidden md:h-80 w-full">
      {imgUrl && (
        <Image
          src={imgUrl}
          width={400}
          height={400}
          alt={item.title}
          className="lg:aspect-square overlay rounded-[100%] no-interaction w-full md:w-auto object-cover"
        />
      )}
      <div className="sm:w-52 max-w-72 mt-4 md:mt-0 md:px-4 h-full relative">
        <div className="font-sans w-full font-semibold h-full md:text-right">
          <p className="font-serif font-light subpixel-antialiased italic text-4xl">
            {item.title}
          </p>
          <p className="text-sm font-normal">{item.type}</p>
          <p className="font-normal text-sm text-light-gray">{item.date}</p>
        </div>

        <div className="mt-4 flex md:items-end flex-col md:absolute md:bottom-0 md:right-4 space-y-2">
          {item.slug && (
            <SecButton href={`/projects/${item.slug}`} label="Case study" />
          )}
          {item.link && (
            <SecButton
              styling="hidden md:inline-block"
              href={item.link}
              label={item.linkTitle || "Prototype"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
