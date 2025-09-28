"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import classNames from "classnames";

import {
  VideoObjectType,
  ImageObjectType,
} from "@/app/mdx-pages/components/projectTypes";

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
    "prose prose-p:max-w-100": true,
    "md:w-1/3 mb-16 md:mb-0": !vertical,
    "md:w-1/2 mb-16": vertical,
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
      {images && <ImageGallery images={images} vertical={vertical} />}
      {videos && <VideoGallery videos={videos} vertical={vertical} />}
    </motion.div>
  );
}

export function ImageGallery({
  images,
  vertical = false,
}: {
  images: string[] | ImageObjectType[];
  vertical?: boolean;
}) {
  const galleryClass = classNames({
    "md:w-3/4 w-full": images.length === 1 && !vertical,
    "w-full flex flex-col justify-center items-center":
      images.length === 1 && vertical,
    "md:w-3/4 w-full grid grid-cols-2 gap-8": images.length > 1 && !vertical,
    "grid grid-cols-2 gap-8  w-full": images.length > 1 && vertical,
  });

  const imageClass = classNames({
    // "flex md:flex-row flex-col": true,
    "w-full h-auto w-full flex flex-col items-center": images.length === 1,
    "w-auto h-auto": images.length > 1 && !vertical,
    "w-auto": images.length > 1 && vertical,
  });

  return (
    <div className={`${galleryClass} h-fit `}>
      {images.map((image) => {
        const imgUrl = typeof image === "string" ? image : image.url;
        return (
          <div key={imgUrl} className={imageClass}>
            <Image
              src={`/projects${imgUrl}`}
              alt={"Project image"}
              className={`object-cover w-auto`}
              width={1500}
              height={1000}
            />
            {typeof image === "object" && image.caption && (
              <p className="mt-2 overflow-scroll font-sans text-light-gray text-sm">
                {image.caption}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function VideoGallery({
  videos,
  vertical,
}: {
  videos: VideoObjectType[];
  vertical: boolean;
}) {
  const galleryClass = classNames({
    "md:w-3/4 w-full": videos.length === 1 && !vertical,
    "w-full": videos.length === 1 && vertical,
    "grid grid-cols-2 gap-4": videos.length > 1,
  });

  return (
    <div className={`${galleryClass}`}>
      {videos.map((video) => {
        return (
          <video
            src={`/projects${video.url}`}
            key={video.url}
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
