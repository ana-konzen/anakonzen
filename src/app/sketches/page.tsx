import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

import Gallery from "@/app/ui/gallery";

const sketchQuery = `*[_type == "sketch"]|order(orderRank)`;

const options = { next: { revalidate: 30 } };

export default async function SketchesPage() {
  const sketches = await client.fetch<SanityDocument[]>(sketchQuery, {}, options);
  console.log("Fetched sketches:", sketches);

  return (
    <div className="px-24 py-8">
      <p className="mb-8 w-64 font-mono text-sm">
        Over the years I have made several coding sketches, mostly with p5. Here are some of my favorites.
      </p>
      <Gallery content={sketches} />
    </div>
  );
}
