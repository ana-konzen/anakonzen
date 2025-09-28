"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { ProjectDataType } from "@/app/projects/util";

export function ProjectContainer({
  project,
  children,
}: {
  project: ProjectDataType;
  children: React.ReactNode;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="text-sm w-screen px-4 md:px-16"
    >
      <ProjectDetails project={project} />
      <SpecialSection>
        <div className="text-2xl mt-24 font-sans font-medium w-80 md:w-100 flex flex-col">
          {project.description}
        </div>
      </SpecialSection>
      {children}
    </motion.div>
  );
}

function SpecialSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.3 }}
      className={`flex flex-col mb-24 md:items-center md:flex-row md:space-y-0 space-y-8 md:space-x-16`}
    >
      {children}
    </motion.div>
  );
}

function ProjectDetails({ project }: { project: ProjectDataType }) {
  return (
    <SpecialSection>
      <div className="w-full justify-between md:flex-row flex-col flex space-y-4 md:space-y-0">
        {project.date && (
          <ProjectDetailSection title="Date" data={project.date} />
        )}
        {project.type && (
          <ProjectDetailSection title="Type" data={project.type} />
        )}
        {project.medium && (
          <ProjectDetailSection title="Made with" data={project.medium} />
        )}
      </div>
    </SpecialSection>
  );
}

function ProjectDetailSection({
  title,
  data,
}: {
  title: string;
  data: string;
}) {
  return (
    <div className="max-w-64">
      <p className="font-sans text-sm lowercase font-semibold">{title}</p>
      <p className="text-sm">{data}</p>
    </div>
  );
}
