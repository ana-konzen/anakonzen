import Image from "next/image";
import { SketchType } from "@/content/sketches";

export function SketchGallery({ content }: { content: SketchType[] }) {
  return (
    <div className="grid grid-cols-1 auto-cols-max sm:grid-cols-2 lg:grid-cols-3 gap-16">
      {content.map((item) => (
        <GalleryItem key={item.title} item={item} />
      ))}
    </div>
  );
}

function GalleryItem({ item }: { item: SketchType }) {
  const imgUrl = `/sketches/${item.img}`;

  return (
    <div className="relative rounded-[100%] overflow-hidden aspect-square">
      <a href={item.link} target="_blank">
        {imgUrl && (
          <Image
            src={imgUrl}
            width={400}
            height={400}
            loading="eager"
            alt={item.title}
            className="h-full w-full object-cover"
            placeholder="blur"
            blurDataURL={`/sketches/blurs/${item.img}`}
          />
        )}
        <div className="p-4 font-semibold flex flex-col items-center justify-center background-cream backdrop-blur-3xl transition-opacity duration-300 opacity-0 hover:opacity-80 absolute w-full h-full top-0">
          <h3>{item.title}</h3>
          <h3>{item.year}</h3>
        </div>
      </a>
    </div>
  );
}
