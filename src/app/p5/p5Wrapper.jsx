"use client";

import { useEffect, useRef } from "react";

const loadP5 = () => import("p5");

export default function P5Wrapper({ sketch, width = 500, height = 500 }) {
  const containerRef = useRef(null);
  const p5InstanceRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    let p5Module;
    // Only run on client
    loadP5()
      .then((mod) => {
        if (!isMounted) return;
        p5Module = mod.default;

        // Instantiate new p5, binding it to containerRef.current
        p5InstanceRef.current = new p5Module((p5) => {
          // Provide the user-defined sketch, with bound p5
          p5.setup = function () {
            p5.createCanvas(width, height).parent(containerRef.current);
            if (typeof sketch.setup === "function") {
              sketch.setup(p5);
            }
          };
          p5.draw = function () {
            if (typeof sketch.draw === "function") {
              sketch.draw(p5);
            }
          };
          // If user passed any other methods (e.g. mousePressed), copy them
          Object.keys(sketch)
            .filter((key) => !["setup", "draw"].includes(key))
            .forEach((key) => {
              p5[key] = (...args) => sketch[key](p5, ...args);
            });
        }, containerRef.current);
      })
      .catch((err) => {
        console.error("Failed to load p5:", err);
      });

    return () => {
      isMounted = false;
      // Clean up on unmount
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove(); // Removes canvas + events
      }
    };
  }, [sketch, width, height]);

  return <div ref={containerRef} />;
}
