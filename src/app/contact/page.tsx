"use client";

// import { useEffect, useState } from "react";

import Line from "@/app/ui/line";
import P5Wrapper from "@/app/p5/p5Wrapper";
import { cttSketch } from "@/app/p5/cttSketch";

export default function ContactPage() {
  return (
    <>
      <ContactPageSketch />
      <div className="relative top-8 flex flex-col items-center justify-center w-full h-full">
        <p className="mb-10 max-w-[400px]">Please email me to get in touch!</p>

        <ContactItem title="anakonzen.design@gmail.com" href="mailto:anakonzen.design@gmail.com" />
        <ContactItem title="GitHub" href="https://github.com/ana-konzen" />
        <ContactItem title="LinkedIn" href="https://www.linkedin.com/in/ana-konzen-oliveira-147164194/" />
      </div>
    </>
  );
}

function ContactItem({ title, href }: { title: string; href: string }) {
  return (
    <div className="mb-8 max-w-[400px]">
      <div className="flex font-sans font-medium flex-col space-y-4 text-center items-center w-[400px]">
        <a className="hover:bg-amber-200" href={href} target="_blank">
          {title}
        </a>
        <Line length={50} ver={true} />
      </div>
    </div>
  );
}

function ContactPageSketch() {
  // const [isDesktop, setIsDesktop] = useState(false);

  // useEffect(() => {
  //   const checkScreen = () => {
  //     setIsDesktop(window.innerWidth > 768);
  //   };

  //   checkScreen();
  //   window.addEventListener("resize", checkScreen);
  //   return () => window.removeEventListener("resize", checkScreen);
  // }, []);

  // if (!isDesktop) {
  //   return null;
  // }

  return (
    <div className="fixed bottom-0 left-0 w-screen h-screen flex flex-col justify-end z-[-1]">
      <P5Wrapper sketch={cttSketch} />
    </div>
  );
}
