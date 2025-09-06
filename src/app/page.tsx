import P5Wrapper from "@/app/p5/p5Wrapper";
import { sketch } from "@/app/p5/sketch";

export default function Page() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
      <P5Wrapper sketch={sketch} />
    </div>
  );
}
