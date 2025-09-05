import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

import Gallery from "@/app/ui/gallery";

const sketchQuery = `*[_type == "sketch"]`;

const options = { next: { revalidate: 30 } };

export default async function ProjectsPage() {
  const sketches = await client.fetch<SanityDocument[]>(sketchQuery, {}, options);
  console.log("Fetched sketches:", sketches);

  return (
    <div className="px-32 py-8">
      <Gallery content={sketches} />
    </div>
  );
}
