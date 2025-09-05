import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";

const { projectId, dataset } = client.config();

export default function urlFor(source: SanityImageSource) {
  return projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;
}
