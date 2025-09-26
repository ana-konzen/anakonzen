"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import classNames from "classnames";

import { type SanityDocument, PortableText, type PortableTextComponents } from "next-sanity";
import urlFor from "@/sanity/url";

import Image from "next/image";

export function ProjectContainer({ project }: { project: SanityDocument }) {
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
      className="text-sm px-4 md:px-16"
    >
      <ProjectSection>
        <div className="w-full justify-between md:flex-row flex-col flex space-y-4 md:space-y-0">
          {project.date && <ProjectDetails title="Date" data={project.date} />}
          {project.type && <ProjectDetails title="Type" data={project.type} />}
          {project.medium && <ProjectDetails title="Made with" data={project.medium} />}
        </div>
      </ProjectSection>
      {project.secondaryImage && (
        <ProjectSection>
          <div className="w-full overflow-hidden pt-24 pb-24">
            <Image
              src={urlFor(project.secondaryImage) || ""}
              width={800}
              height={800}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </ProjectSection>
      )}
      <ProjectSection>
        <div className="text-2xl font-sans font-medium md:w-1/3 flex flex-col justify-center">
          <p>{project.description}</p>
        </div>
      </ProjectSection>

      {project.content &&
        project.content.map((item: SanityDocument) => <ProjectContentSection key={item._key} item={item} />)}
    </motion.div>
  );
}

export function ProjectContentSection({ item }: { item: SanityDocument }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const contClass = classNames({
    "flex flex-col py-8 md:items-center md:flex-row space-y-12 md:space-x-16": !item.vertical,
    "mix-blend-multiply": item.multiply,
  });

  const textClass = classNames({
    "md:w-1/3 flex mb-16 md:mb-0 flex-col justify-center": !item.vertical,
    "md:w-1/2 mb-16": item.vertical,
  });

  const components: PortableTextComponents = {
    block: {
      h5: ({ children }) => <h5 className="font-semibold text-sm uppercase my-8 mb-2">{children}</h5>,
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
        return (
          <a href={value?.href} target={target} className="font-medium hover:font-bold mt-8 block">
            {children} →
          </a>
        );
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.3 }}
      className={`${contClass} mb-32 mt-64 md:mt-64`}
    >
      {(item.title || item.body) && (
        <div className={`text-base max-w-80 font-sans ${textClass}`}>
          {item.title && <h3 className="font-bold text-sm uppercase mb-2">{item.title}</h3>}
          {Array.isArray(item.body) && <PortableText value={item.body} components={components} />}
        </div>
      )}
      {item.images && item.images.length > 0 && (
        <ImageGallery images={item.images} vertical={item.vertical} />
      )}
      {item.videos && item.videos.length > 0 && (
        <VideoGallery videos={item.videos} vertical={item.vertical} />
      )}
    </motion.div>
  );
}

export function ImageGallery({ images, vertical }: { images: SanityDocument[]; vertical: boolean }) {
  const galleryClass = classNames({
    "md:w-3/4 w-full": images.length === 1 && !vertical,
    "w-full": images.length === 1 && vertical,
    "md:w-3/4 w-full grid grid-cols-2 gap-8": images.length > 1 && !vertical,
    "grid grid-cols-2 gap-8 w-full": images.length > 1 && vertical,
  });

  const imageClass = classNames({
    // "flex md:flex-row flex-col": true,
    "w-full h-auto": images.length === 1,
    "w-auto h-auto": images.length > 1 && !vertical,
    "w-auto h-[50vh]": images.length > 1 && vertical,
  });

  return (
    <div className={`${galleryClass}`}>
      {images.map((image) => {
        const imgUrl = urlFor(image.image);
        if (!imgUrl) {
          return null;
        }
        return (
          <div key={image._key} className={imageClass}>
            <Image
              src={imgUrl}
              key={image._key}
              alt={image.alt || "Project image"}
              className={`object-cover w-auto`}
              width={1500}
              height={1000}
            />
            {image.caption && (
              <p className="mt-2 overflow-scroll font-sans text-light-gray text-sm">{image.caption}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function VideoGallery({ videos, vertical }: { videos: SanityDocument[]; vertical: boolean }) {
  const galleryClass = classNames({
    "md:w-3/4 w-full": videos.length === 1 && !vertical,
    "w-full": videos.length === 1 && vertical,
    "grid grid-cols-2 gap-4": videos.length > 1,
  });

  return (
    <div className={`${galleryClass}`}>
      {videos.map((video) => {
        if (!video.videoURL) {
          return null;
        }
        return (
          <video
            src={video.videoURL}
            key={video._key}
            autoPlay
            loop
            muted
            playsInline
            controls={video.controls || false}
            className="object-cover w-full h-auto"
            width={1000}
            height={1000}
          />
        );
      })}
    </div>
  );
}

function ProjectSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.3 }}
      className="flex flex-col items-center md:flex-row md:space-y-0 space-y-8 md:space-x-16 mb-16 mix-blend-multiply"
    >
      {children}
    </motion.div>
  );
}

function ProjectDetails({ title, data }: { title: string; data: string }) {
  return (
    <div className="max-w-64">
      <p className="font-sans text-sm lowercase font-semibold">{title}</p>
      <p className="text-sm">{data}</p>
    </div>
  );
}
