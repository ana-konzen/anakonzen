import Image from "next/image";

import { ProjectContainer } from "@/app/mdx-pages/components/projectContainer";

import { ProjectDataType } from "@/app/mdx-pages/components/projectTypes";

import Button from "@/app/ui/button";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Project, data } = await import(`@/content/${slug}.mdx`);

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

function TitlePage({ data, slug }: { data: ProjectDataType; slug: string }) {
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
  return (
    <div className=" w-auto overflow-visible relative mix-blend-multiply flex-2 md:h-[70%] h-auto mb-4">
      <Image
        src={`/projects/${slug}/hero.png`}
        width={1000}
        height={1000}
        alt={data.title}
        className={styling}
      />
    </div>
  );
}

function HeroVideo({ data, slug }: { data: ProjectDataType; slug: string }) {
  const styling = data.heroStyling || "w-full object-cover object-top h-full";
  return (
    <div className=" w-auto overflow-visible relative mix-blend-multiply flex-2 md:h-[70%] h-auto mb-4">
      <video
        src={`/projects/${slug}/hero.mp4`}
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
