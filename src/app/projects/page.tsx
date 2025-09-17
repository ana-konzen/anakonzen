import { client } from "@/sanity/client";

import { type SanityDocument } from "next-sanity";
import urlFor from "@/sanity/url";
import Image from "next/image";

const projectQuery = `*[_type == "project"]|order(orderRank)`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsPage() {
  const projects = await client.fetch<SanityDocument[]>(projectQuery, {}, options);
  console.log("Fetched projects:", projects);

  return <Gallery content={projects} />;
}

function Gallery({ content }: { content: SanityDocument[] }) {
  return (
    <div className="flex flex-col space-y-24 w-full px-24 py-8 ">
      {content.map((item) => (
        <GalleryItem key={item._id} item={item} />
      ))}
    </div>
  );
}

function GalleryItem({ item }: { item: SanityDocument }) {
  const imgUrl = urlFor(item.image);

  return (
    <div className="md:justify-center md:space-x-8 relative flex-col flex md:flex-row overflow-hidden md:h-100 w-full">
      {imgUrl && (
        <Image
          src={imgUrl}
          width={400}
          height={400}
          alt={item.title}
          className="aspect-square w-full md:w-auto object-cover"
        />
      )}
      <div className="md:w-72 mt-4 md:mt-0 md:p-4 h-full relative">
        <div className="mb-4 font-mono w-full font-semibold h-full md:text-right">
          <p className="font-bold text-lg">{item.title}</p>
          {/* <p className="text-sm font-normal">{item.type}</p> */}
          <p className="font-normal text-sm text-light-gray">{item.date}</p>

          <p className="font-normal mt-4 text-sm">{item.description || "No description available."}</p>
        </div>

        <div className="flex flex-col md:absolute md:bottom-4 md:right-4 space-y-2">
          {item.slug && (
            <a
              href={`/projects/${item.slug.current}`}
              className="md:text-right uppercase font-mono underline underline-offset-3 font-bold md:bottom-4 md:right-4 text-sm"
            >
              Case study
            </a>
          )}

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              className=" md:text-right uppercase font-mono underline underline-offset-3 font-bold md:bottom-4 md:right-4 text-sm"
            >
              {item.linkTitle || "link to prototype"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
