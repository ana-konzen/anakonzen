import { SketchGallery } from "@/app/sketches/sketchGallery";
import { sketches } from "@/content/sketches";

export default function SketchesPage() {
  return (
    <div className="md:px-48 px-24 py-8">
      <p className="mb-8 w-full max-w-100">
        Over the years I have made several coding sketches, mostly with p5. Here
        are some of my favorites.
      </p>
      <SketchGallery content={sketches} />
    </div>
  );
}
