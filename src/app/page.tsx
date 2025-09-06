import P5Wrapper from "@/app/p5/p5Wrapper";
import { sketch } from "@/app/p5/sketch";

export default function Page() {
  return (
    <div className="flex flex-col w-screen h-screen fixed top-20 font-mono items-center justify-center">
      <div className="fixed bottom-0 left-0 w-screen h-screen z-[-1]">
        <P5Wrapper sketch={sketch} width={700} height={500} />
      </div>
    </div>
  );
}
