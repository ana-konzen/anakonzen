import Image from "next/image";
import { ProjectDataType } from "@/app/projects/util";

export function TitlePage({
  data,
  slug,
}: {
  data: ProjectDataType;
  slug: string;
}) {
  return (
    <div className="flex flex-col mb-8 w-full h-screen py-4 px-4 md:px-16">
      {data.heroIsVideo ? (
        <HeroVideo data={data} slug={slug} />
      ) : (
        <HeroImage data={data} slug={slug} />
      )}
      <div className="font-light  text-black ligatures-discretionary hyphens-auto font-serif italic text-8xl md:text-9xl">
        {data.title}
      </div>
    </div>
  );
}

function HeroImage({ data, slug }: { data: ProjectDataType; slug: string }) {
  const styling = data.heroStyling || "w-full object-cover h-full";
  const heroUrl = data.heroPath || `/projects/${slug}/hero.png`;
  return (
    <div className=" w-auto overflow-visible relative mix-blend-multiply flex-2 md:h-[70%] h-auto mb-4">
      <Image
        src={heroUrl}
        width={1000}
        height={1000}
        alt={data.title}
        className={styling}
        unoptimized
      />
    </div>
  );
}

function HeroVideo({ data, slug }: { data: ProjectDataType; slug: string }) {
  const styling = data.heroStyling || "w-full object-cover object-top h-full";
  const heroUrl = data.heroPath || `/projects/${slug}/hero.mp4`;

  return (
    <div className=" w-auto overflow-visible relative mix-blend-multiply flex-2 md:h-[70%] h-auto mb-4">
      <video
        src={heroUrl}
        autoPlay
        loop
        muted
        playsInline
        width={1000}
        height={1000}
        className={styling}
      />
    </div>
  );
}
