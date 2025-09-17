import { type SanityDocument } from "next-sanity";
import urlFor from "@/sanity/url";
import Image from "next/image";

export default function Gallery({ content }: { content: SanityDocument[] }) {
  return (
    <div className="grid grid-cols-1 auto-cols-max sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {content.map((item) => (
        <GalleryItem key={item._id} item={item} />
      ))}
    </div>
  );
}

function GalleryItem({ item }: { item: SanityDocument }) {
  const imgUrl = urlFor(item.image);

  return (
    <div className="relative overflow-hidden aspect-square">
      <a href={item.link} target="_blank">
        {imgUrl && (
          <Image
            src={imgUrl}
            width={400}
            height={400}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        )}
        <div className="p-4 font-semibold transition-opacity duration-300 opacity-0 hover:opacity-100 absolute w-full h-full bg-amber-200 top-0">
          <h3>{item.title}</h3>
          <h3>{item.year}</h3>
        </div>
      </a>
    </div>
  );
}
