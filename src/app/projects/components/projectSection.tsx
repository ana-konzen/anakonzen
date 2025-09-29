"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import classNames from "classnames";
import { VideoObjectType, ImageObjectType } from "@/app/projects/util";
import { ProjectGallery } from "./projectGallery";

export function ProjectSection({
  children,
  styling,
  images,
  videos,
  vertical = false,
  multiply = true,
}: {
  children?: React.ReactNode;
  styling?: string;
  images?: string[] | ImageObjectType[];
  videos?: VideoObjectType[];
  vertical?: boolean;
  multiply?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const contClass = classNames({
    "flex flex-col justify-center md:justify-start md:space-y-0 py-8 md:items-center md:flex-row space-y-12 md:space-x-16":
      !vertical,
    "mix-blend-multiply": multiply,
  });

  const textClass = classNames({
    prose: true,
    "md:w-1/3 mb-16 md:mb-0 prose-p:max-w-80": !vertical,
    "md:w-1/2 mb-16 prose-p:max-w-100": vertical,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.3 }}
      className={`w-full mb-60 mt-20 ${contClass} ${styling}`}
    >
      {children && <div className={textClass}>{children}</div>}
      {(images || videos) && (
        <ProjectGallery images={images} videos={videos} vertical={vertical} />
      )}
    </motion.div>
  );
}
