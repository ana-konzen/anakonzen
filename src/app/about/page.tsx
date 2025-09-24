"use client";

import { useEffect, useState } from "react";

import P5Wrapper from "@/app/p5/p5Wrapper";
import { bioSketch } from "@/app/p5/bioSketch";

export default function AboutPage() {
  return (
    <>
      <AboutPageSketch />
      <div className="relative px-16 top-8 flex text-sm flex-col items-center justify-center w-full h-full font-mono ">
        <p className="mb-20 max-w-[400px]">
          I am a Brazilian designer and coder based in NYC. I merge my background in the fine arts industry
          with creative coding to build a unique design practice. I mostly focus on projects with a social
          impact that involve extensive research, exploring art processes mixed with emerging technologies.
        </p>
        <BioSection title="Education">
          <EducationItem
            degree="MPS, Interactive Telecommunications Program"
            institution="New York University, New York, NY"
            year="2025 — 2027 (expected)"
          />

          <EducationItem
            degree="AAS in Communication Design"
            institution="Parsons School of Design, New York, NY"
            year="2023 — 2025"
          />
          <EducationItem
            degree="BA in Art History"
            institution="Columbia University, New York, NY"
            year="2018 — 2022"
          />
        </BioSection>
        <BioSection title="Experience">
          <ExperienceItem
            role="Research Assistant, Design and Technology"
            company="Parsons School of Design, New York, NY"
            year="September 2024 — May 2025"
          />
          <ExperienceItem
            role="Executive Assistant and Researcher"
            company="Sotheby's, New York, NY"
            year="October 2022 — February 2023"
          />
          <ExperienceItem
            role="Research Assistant"
            company="LGDR (now Lévy Gorvy Dayan), New York, NY"
            year="May 2022 — October 2022"
          />
        </BioSection>
        <BioSection title="Skills">
          Creative Coding, UI/UX Design, Research, Art Direction, Prototyping
        </BioSection>
        <BioSection title="Colophon">
          This website was hand-coded by me, feel free to look at the{" "}
          <a href="https://github.com/ana-konzen/anakonzen">source code</a>. Fonts used are Fraktion Mono and
          Fraktion Sans, by Pangram.
        </BioSection>
      </div>
    </>
  );
}

function BioSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 w-full max-w-[400px]">
      <BioHeader title={title} />
      <div className="text-sm pt-2">{children}</div>
    </div>
  );
}

function BioHeader({ title }: { title: string }) {
  return (
    <div className="flex space-x-4 items-end uppercase md:w-[400px] font-bold ">
      <p>{title}</p> <div className={`h-[1px] w-full mb-1 bg-foreground`} />
    </div>
  );
}

function EducationItem({ degree, institution, year }: { degree: string; institution: string; year: string }) {
  return (
    <div className="mb-3">
      <p className="font-semibold">{degree}</p>
      <p className="text-sm">{institution}</p>
      <p className="text-xs text-gray-500">{year}</p>
    </div>
  );
}

function ExperienceItem({ role, company, year }: { role: string; company: string; year: string }) {
  return (
    <div className="mb-3">
      <p className="font-semibold">{role}</p>
      <p className="text-sm">{company}</p>
      <p className="text-xs text-gray-500">{year}</p>
    </div>
  );
}

function AboutPageSketch() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-screen h-screen z-[-1]">
      <P5Wrapper sketch={bioSketch} width={700} height={500} />
    </div>
  );
}
