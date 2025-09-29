import { SketchGallery } from "@/app/sketches/sketchGallery";
import { sketches } from "@/content/sketches";

export default function SketchesPage() {
  return (
    <div className="md:px-48 px-24 mt-14">
      <p className="mb-14 w-full max-w-100">
        Over the years I have made several coding sketches, mostly with p5. Here
        are some of my favorites.
      </p>
      <SketchGallery content={sketches} />
    </div>
  );
}
