import Image from "next/image";
import classNames from "classnames";
import { VideoObjectType, ImageObjectType } from "@/app/projects/util";

export function ProjectGallery({
  images,
  videos,
  vertical,
}: {
  images?: string[] | ImageObjectType[];
  videos?: VideoObjectType[];
  vertical?: boolean;
}) {
  const assets = images ? images : videos ? videos : [];
  const galleryClass = classNames({
    "md:w-3/4 w-full": assets.length === 1 && !vertical,
    "w-full flex flex-col justify-center items-center":
      assets.length === 1 && vertical,
    "md:w-3/4 w-full grid grid-cols-2 gap-8": assets.length > 1 && !vertical,
    "grid grid-cols-2 gap-8  w-full": assets.length > 1 && vertical,
  });

  return (
    <div className={`${galleryClass} h-fit`}>
      {images && <ImageGallery images={images} vertical={vertical} />}
      {videos && <VideoGallery videos={videos} />}
    </div>
  );
}

function ImageGallery({
  images,
  vertical = false,
}: {
  images: string[] | ImageObjectType[];
  vertical?: boolean;
}) {
  const imageClass = classNames({
    // "flex md:flex-row flex-col": true,
    "w-full h-auto w-full flex flex-col items-center": images.length === 1,
    "w-auto h-auto": images.length > 1 && !vertical,
    "w-auto": images.length > 1 && vertical,
  });

  return (
    <>
      {images.map((image) => {
        //image url is /projects/project-name/imagename.jpg
        const imgUrl = typeof image === "string" ? image : image.url;
        // blur path is /projects/project-name/blurs/imagename.jpg
        const blurUrl = `/projects${imgUrl.replace(/\/([^/]+)\.(jpg|jpeg|png|gif)$/, "/blurs/$1.$2")}`;
        console.log(blurUrl);
        return (
          <div key={imgUrl} className={imageClass}>
            <Image
              src={`/projects${imgUrl}`}
              alt={"Project image"}
              className={`object-cover w-auto`}
              width={1500}
              height={1000}
              loading="eager"
              placeholder="blur"
              blurDataURL={blurUrl}
            />
            {typeof image === "object" && image.caption && (
              <p className="mt-2 overflow-scroll font-sans text-light-gray text-sm">
                {image.caption}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}

function VideoGallery({
  videos,
}: {
  videos: VideoObjectType[];
  vertical?: boolean;
}) {
  return (
    <>
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
            poster={"/web-mock-up.png"}
          />
        );
      })}
    </>
  );
}
