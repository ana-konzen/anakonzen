"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import classNames from "classnames";

import { type SanityDocument } from "next-sanity";
import urlFor from "@/sanity/url";

import Image from "next/image";

export function ProjectContainer({ content }: { content: SanityDocument }) {
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
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="mt-8 text-sm">
      {content.map((item: SanityDocument) => (
        <ProjectSection key={item._key} item={item} />
      ))}
    </motion.div>
  );
}

export function ProjectSection({ item }: { item: SanityDocument }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const contClass = classNames({
    "flex flex-col py-8 items-center md:flex-row space-y-8 md:space-x-16": !item.vertical,
  });

  const textClass = classNames({
    "md:w-1/3 flex flex-col justify-center": !item.vertical,
    "md:w-1/2 mb-8": item.vertical,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", staggerChildren: 0.3 }}
      className={`${contClass} mb-32 mix-blend-multiply`}
    >
      <div className={`text-sm ${textClass}`}>
        <h3 className="font-semibold mb-2">{item.title}</h3>
        <p className="text-sm">{item.text}</p>
      </div>
      {item.images && item.images.length > 0 && (
        <ImageGallery images={item.images} vertical={item.vertical} />
      )}
    </motion.div>
  );
}

export function ImageGallery({ images, vertical }: { images: SanityDocument[]; vertical: boolean }) {
  const galleryClass = classNames({
    "w-3/4": images.length === 1 && !vertical,
    "w-full": images.length === 1 && vertical,
    "grid grid-cols-2 gap-4": images.length > 1,
  });
  return (
    <div className={`${galleryClass}`}>
      {images.map((image) => {
        const imgUrl = urlFor(image.image);
        if (!imgUrl) {
          return null;
        }
        return (
          <Image
            src={imgUrl}
            key={image._key}
            alt={image.alt || "Project image"}
            className="object-cover w-full h-auto"
            width={1000}
            height={1000}
          />
        );
      })}
    </div>
  );
}
